import { ActionType, InitialState } from '../type';
import { ADD_CAR_LIST, GET_CARS, MODAL_SHOWED } from './action-types';

const initialState: InitialState = {
  carList: [],
  modalShow: false,
};

const appReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        carList: [...action.carList],
      };
    case ADD_CAR_LIST:
      return {
        ...state,
        carList: [...state.carList, action.car],
      };
    case MODAL_SHOWED:
      return {
        ...state,
        modalShow: !state.modalShow,
      };
    default:
      return state;
  }
};

export default appReducer;
