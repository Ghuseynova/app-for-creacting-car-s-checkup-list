import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Container, Row } from 'react-bootstrap';
import Navigation from './components/navigation/navigation';

import ActiveCarsCheckupList from './pages/active-cars-checkup-list';
import PassedCarsCheckupList from './pages/passed-cars-checkup-list';
import AddingCarModal from './components/adding-car-modal';

import { getModalShow } from './store/selectors';

function App() {
  const modalShow = useSelector(getModalShow);

  console.log(modalShow);

  return (
    <Router>
      <div className='App'>
        <Container>
          <Row>
            <h1>Car's Checkup List</h1>
          </Row>
        </Container>
        <Navigation />

        <AddingCarModal show={modalShow} />
      </div>

      <Switch>
        <Route exact path='/' component={ActiveCarsCheckupList} />

        <Route path='/active' component={ActiveCarsCheckupList} />

        <Route path='/passed' component={PassedCarsCheckupList} />
      </Switch>
    </Router>
  );
}

export default App;
