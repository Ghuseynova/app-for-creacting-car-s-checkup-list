import { ADD_CAR_LIST, GET_CARS, MODAL_SHOWED } from './store/action-types';

interface InitialState {
  carList: Car[];
  modalShow: boolean;
}

interface Car {
  model: string;
  owner: string;
  isPassedCheckup: boolean;
}

interface GetCars {
  type: typeof GET_CARS;
  carList: Car[] | [];
}

interface AddToCarList {
  type: typeof ADD_CAR_LIST;
  car: Car;
}

interface SetModalShow {
  type: typeof MODAL_SHOWED;
  value: boolean;
}

type ActionType = GetCars | AddToCarList | SetModalShow;

declare module '*.json' {
  const value: any;
  export default value;
}
