import axios from 'axios';
import {API_ENDPOINT, SEED} from 'utils/constants';

const RANDOM_USER_PROPS = {
  location: true,
  name: true,
  email: true,
  id: true,
  phone: true,
  picture: true,
  nat: false,
  gender: false,
};

function getUserPropsToRequest(userProps = RANDOM_USER_PROPS) {
  return Object.entries(userProps)
    .reduce((props, [propKey, shouldRequest]) => {
      if (shouldRequest) {
        props.push(propKey);
      }
      return props;
    }, [])
    .join(',');
}

async function fetchUsers(page, results, seed = SEED) {
  return axios.get(API_ENDPOINT.RANDOM_USER, {
    params: {
      page,
      results,
      seed,
      inc: getUserPropsToRequest(),
    },
  });
}

export {fetchUsers};
