import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Recipes from './Recipes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Recipes />, document.getElementById('root'));
registerServiceWorker();
