import { createStore } from 'easy-peasy';
import userStore from './userStore';

const store = createStore({
  userStore,
});

export default store;