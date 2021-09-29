import { CHANGE_FILTER } from '../../constants';

const filter = (state = 'all', { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};

export default filter;
