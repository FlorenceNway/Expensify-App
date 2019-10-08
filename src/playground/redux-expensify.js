import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ACTION:
    //ADD_EXPENSE
    //REMOVE_EXPENSE
    //EDIT_EXPENSE
    //SET_TEXT_FILTER
    //SORT_BY_DATE
    //SORT_BY_AMOUNT
    //SET_START_DATE
    //SET_END_DATE

//ACTION GENERATOR:

const addExpense = 
({ //declare the properties with default value (which we will get from user)
        description = '', note = '', amount = 0, createdAt = 0
} = {}) => 
({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => ({ //destructure the object , if no, empty object
    type:'REMOVE_EXPENSE',
    id
});

//WE GONNA CREATE 2 REDUCERS TO HANDLE THESE TWO OBJECTS(demoState):
//REDUCERS:
    //Expenses Reducer
const expenseReducerDefaultState = [];
const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
            //return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>  id !== action.id);
        default:
            return state;
    }
};

    //Filter Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return filtersReducerDefaultState;
        default:
            return state;
    }
};

//Store Creation:
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'Electricity', amount: 50}))

store.dispatch(removeExpense({id: expenseOne.expense.id}));

//WE GONNA CREATE 2 REDUCERS TO HANDLE THESE TWO OBJECTS:
const demoState = {
    expenses: [{
        id: 'pijasdfhwer', //we identify using uuid npm package
        description: 'January Rent', //the rest are from user
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//examples
    //spread object (npm add transform-class-properties in order to work spread...)

const user ={
    name: 'Jen',
    age: 24
};
console.log({
    ...user,
    location:'London',
    age: 27
})