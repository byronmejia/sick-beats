import React from 'react';
import ReactDOM from 'react-dom';
import { Jukebox } from './Jukebox.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jukebox />, div);
  ReactDOM.unmountComponentAtNode(div);
});

