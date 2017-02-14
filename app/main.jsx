import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App, store} from './components/App.jsx';

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  const render = () => {
    console.log(store.getState())
    ReactDOM.render(
      <App config={store.getState()} />,
      app
    );
  }

  store.subscribe(render);
  render();
}

main();
