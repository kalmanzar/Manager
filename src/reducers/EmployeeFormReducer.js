import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE,
  EMPLOYEE_DELETE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // the [] is ES6 for key interpolation
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      // clears the form after successfully creating an employee
      return INITIAL_STATE;
    case EMPLOYEE_SAVE:
      return INITIAL_STATE;
    case EMPLOYEE_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
