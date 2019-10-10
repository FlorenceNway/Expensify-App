   //Expenses Reducer
const expenseReducerDefaultState = [];

export default (state = expenseReducerDefaultState, action) => {
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

