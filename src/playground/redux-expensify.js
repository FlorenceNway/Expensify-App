import {createStore, combineReducer} from 'redux';

const demoState = {
    expenses: [{
        id: 'pijasdfhwer',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amoutn: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};