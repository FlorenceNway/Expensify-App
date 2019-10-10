//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //npm add react-redux@5.0.5 (API)
//provider let individula components to access the store without manually passing around
import AppRouter from './routers/AppRouter'
//BR - once to create new router, R-route for every single page
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// Router - provide path we want to match for and what we want to do when the user visit that path


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill'}));
store.dispatch(addExpense({description: 'Gas bill'}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



ReactDOM.render(jsx, document.getElementById('app'))


