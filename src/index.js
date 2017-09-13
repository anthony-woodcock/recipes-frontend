import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Recipes from './Recipes';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
    <BrowserRouter>
        <Recipes />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
