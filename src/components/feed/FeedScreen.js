import React, {useState, useEffect, useRef, useContext} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {fetchUsers as fetchUsersService} from 'services/randomUser';
import {ROUTE} from 'utils/constants';
import {TOAST_TYPE} from 'components/common/Toast';
import Text from 'components/common/Text';
import ToastContext from 'contexts/ToastContext';
import FeedItem from './FeedItem';
import FeedFooter from './FeedFooter';
import SearchBar from './SearchBar';

import styles from './FeedScreen.styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const INITIAL_STATE = {
  users: [],
  page: 1,
  results: 15,
  isLastPage: false,
  lastPageWithoutErrors: 0,
  firstRequestSuccessful: false,
};

const FeedScreen = ({navigation}) => {
  const toastGenerator = useContext(ToastContext);
  const [
    {
      page,
      results,
      users,
      isLastPage,
      lastPageWithoutErrors,
      isFirstRequestSuccessful,
    },
    setState,
  ] = useState(INITIAL_STATE);
  const usersRef = useRef([]);
  const searchBarInstanceRef = useRef(null);

  async function fetchUsers() {
    try {
      const {
        data: {results: usersRes},
      } = await fetchUsersService(page, results);
      const sortedUsersByLastName = sortUsersByLastName(usersRes);
      usersRef.current = sortedUsersByLastName.slice();
      setState((prevState) => ({
        ...prevState,
        users: sortedUsersByLastName,
        isLastPage: usersRes.length !== results,
        lastPageWithoutErrors: page,
        isFirstRequestSuccessful:
          page === 1 ? true : prevState.isFirstRequestSuccessful,
      }));
    } catch (e) {
      console.log(e);
      setState((prevState) => ({
        ...prevState,
        page: lastPageWithoutErrors,
        isFirstRequestSuccessful:
          page === 1 ? false : prevState.isFirstRequestSuccessful,
      }));
      toastGenerator.next({
        type: TOAST_TYPE.ERROR,
        message: 'An error has ocurred trying to fetch users',
      });
    }
  }

  function sortUsersByLastName(users) {
    return users.sort((a, b) => {
      const aLastName = (a.name && a.name.last) || '';
      const bLastName = (b.name && b.name.last) || '';
      if (aLastName > bLastName) {
        return 1;
      } else if (aLastName < bLastName) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  function filterUsersByLastName(users, searchFor) {
    return users.filter((user) => {
      const lastName = user.name && user.name.last;
      return lastName.toLowerCase().startsWith(searchFor.toLowerCase());
    });
  }

  function handlePressFeedItem(user) {
    navigation.push(ROUTE.USER_DETAIL, {user});
  }

  function renderItem({item: user}) {
    return <FeedItem user={user} onPress={handlePressFeedItem} />;
  }

  function handleSearch(searchFor) {
    let nextUsers;
    if (!searchFor) {
      nextUsers = usersRef.current;
    } else {
      nextUsers = filterUsersByLastName(usersRef.current, searchFor);
    }

    setState((prevState) => ({
      ...prevState,
      users: nextUsers,
      searchFor,
    }));
  }

  function handlePressNext() {
    if (isLastPage) {
      return;
    }
    setState((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  }

  function handlePressPrev() {
    if (page <= 1) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      page: prevState.page - 1,
    }));
  }

  function hideFooterButtons() {
    return (
      isFirstRequestSuccessful === null || isFirstRequestSuccessful === false
    );
  }

  function handlePressRetry() {
    handlePressNext();
  }

  useEffect(() => {
    if (lastPageWithoutErrors === page) {
      return;
    }

    fetchUsers();
  }, [page]);



  return (
    <View style={styles.feedScreen}>
      <SearchBar
        onSearch={handleSearch}
        ref={(el) => (searchBarInstanceRef.current = el)}
      />
      {isFirstRequestSuccessful === false && (
        <View style={styles.retryContainer}>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={handlePressRetry}>
            <Text style={styles.retryText}>Retry?</Text>
            <FontAwesome5Icon name="sync-alt" style={styles.retryIcon} />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={users}
        keyExtractor={(user, i) => (user.id && user.id.value) || i.toString()}
        renderItem={renderItem}
      />
      <FeedFooter
        onPressPrev={handlePressPrev}
        onPressNext={handlePressNext}
        isFirst={hideFooterButtons() || page === 1}
        isLast={hideFooterButtons() || isLastPage}
      />
    </View>
  );
};

export default FeedScreen;
