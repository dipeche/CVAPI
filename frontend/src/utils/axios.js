import axios from 'axios';

import { BACKEND_URL } from './constant';

axios.defaults.baseURL = BACKEND_URL;

export default axios;
