//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
//BR - once to create new router, R-route for every single page
import 'normalize.css/normalize.css'
import './styles/style.scss';

// Router - provide path we want to match for and what we want to do when the user visit that path

ReactDOM.render(<AppRouter />,document.getElementById('app'))


