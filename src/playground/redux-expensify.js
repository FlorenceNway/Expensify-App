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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = (amount = '') => ({
    type: 'SORT_BY_AMOUNT',
    amount
})
const sortByDate = (date = '') => ({
    type: 'SORT_BY_DATE',
    date
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

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
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates //want to overwrite the exsiting ones with updates(see below examples)
                    }
                } else {
                    return expense;
                }
            })    
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            } 
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }  
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }            
        default:
            return state;
    }
};

//Get visible expenses
const getVisibleExpenses = (expenses,{text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=> {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        //figure out if expenses.description as the text variable string inside of it

        return startDateMatch && endDateMatch && textMatch; //return true or false
    }).sort((a,b) => {
        if(sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1: -1
        }else if(sortBy == 'amount') {
            return a.amount < b.amount ? 1: -1 //1 mean come first in the list
        }
    });

}


//Store Creation:
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

//console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000}))
const expenseTwo = store.dispatch(addExpense({description: 'Electricity', amount: 50, createdAt: -1500}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter('e'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(-125));
// store.dispatch(setStartDate());

//store.dispatch(setEndDate(1250));


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
// console.log({
//     ...user,
//     location:'London',
//     age: 27 //overwrite
// })

//Timestamps ( calculated by miliseconds)
//always start at January 1st 1970 (it is called unix epoch)
//it is valid to have - value, eg, 33400 (33.4 second after January 1st 1970)
//, 10, -203 (- is less than 1970, might be 1969)

