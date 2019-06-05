import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Payment from './Payment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Payment/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
