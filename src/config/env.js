import {API_URL} from '@env';

const api_url = {
  API_URL,
};

export default __DEV__ ? api_url : api_url;
