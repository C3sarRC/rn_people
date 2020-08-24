import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  memo,
} from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {debounce} from 'utils/functions';

import styles from './SearchBar.styles';

const INITIAL_STATE = '';
const DEBOUNCE_BY = 400;

const SearchBar = forwardRef(({onSearch}, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      clear: () => {
        clearInput();
      },
    }),
    [],
  );
  const [searchFor, setSearchFor] = useState(INITIAL_STATE);
  const searchFnRef = useRef(null);
  const textInputInstanceRef = useRef(null);

  if (!searchFnRef.current) {
    searchFnRef.current = debounce(handleChangeSearch, DEBOUNCE_BY);
  }

  function handleChangeSearch(text) {
    setSearchFor(text);
    onSearch(text);
  }

  function handleClickCancel() {
    clearInput();
    onSearch(INITIAL_STATE);
    setSearchFor(INITIAL_STATE);
  }

  function clearInput() {
    textInputInstanceRef.current.clear();
  }

  return (
    <View style={styles.searchBar}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={searchFnRef.current}
          ref={(el) => (textInputInstanceRef.current = el)}
        />
        <FontAwesomeIcon name="search" style={styles.searchIcon} />
        {(searchFor || null) && (
          <TouchableOpacity
            onPress={handleClickCancel}
            style={styles.closeIconBtn}>
            <FontAwesomeIcon
              name="times-circle"
              style={styles.closeIcon}
              solid
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const memoizedSeachBar = memo(SearchBar);

export default memoizedSeachBar;
