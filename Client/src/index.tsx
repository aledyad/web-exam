import * as React from 'react';
import { render } from 'react-dom';
import TestButton from './test-button';
import NavBar from './navbar';
import Basket from './basket';

require('./styles/app.css');

render(
  <>
    <TestButton text='Click me1' />
    <NavBar />
    <Basket />
  </>,
  document.getElementById('root')
);
