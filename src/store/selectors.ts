import { Car } from '../type';

const getCarList = (state: { carList: Car[] }): Car[] => state.carList;
const getModalShow = (state: { modalShow: boolean }): boolean =>
  state.modalShow;

export { getCarList, getModalShow };
