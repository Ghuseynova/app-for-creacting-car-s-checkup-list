import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../store/actions';

import cars from '../data/cars';
import { getCarList } from '../store/selectors';
import { ListGroup } from 'react-bootstrap';

const ActiveCarsCheckupList = (): JSX.Element => {
  const dispatch = useDispatch();
  const carsList = useSelector(getCarList);

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem('app_state') || '{}');

    !localState
      ? dispatch(getCars(cars))
      : dispatch(getCars(localState.carList));
  }, [dispatch]);

  return (
    <div className='container mb-30'>
      <ListGroup className='mt-30'>
        {carsList.map((listItem, i) => {
          if (listItem.isPassedCheckup) {
            return (
              <ListGroup.Item key={`list-item-${i}`}>
                <p>
                  <strong>Model:</strong> {listItem.model}
                </p>
                <p>
                  <strong>Owner:</strong> {listItem.owner}
                </p>
              </ListGroup.Item>
            );
          }

          return null;
        })}
      </ListGroup>
    </div>
  );
};

export default ActiveCarsCheckupList;
