import { AddToCarList, Car, GetCars, SetModalShow } from '../type';
import { ADD_CAR_LIST, GET_CARS, MODAL_SHOWED } from './action-types';

const getCars = (carList: Car[] | []): GetCars => ({
  type: GET_CARS,
  carList,
});

const addToCarList = (car: Car): AddToCarList => ({
  type: ADD_CAR_LIST,
  car,
});

const setModalShow = (value: boolean): SetModalShow => ({
  type: MODAL_SHOWED,
  value,
});

export { getCars, addToCarList, setModalShow };
