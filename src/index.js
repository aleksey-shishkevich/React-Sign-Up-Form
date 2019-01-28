import React from 'react';
import ReactDOM from 'react-dom';
//import './styles/main.scss';
import { configureStore as store } from './store/configureStore';

import { Provider } from 'react-redux';
import App from './components/App/';
import Confirmation from './components/Confirmation/';

ReactDOM.render(
    <Provider store={store}>
    	<div>
      		<App/>
	  		<Confirmation/>
	  	</div>
    </Provider>,
  document.getElementById('root')
);
