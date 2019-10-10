import uuid from 'uuid';

export const addExpense = 
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

export const removeExpense = ({id} = {}) => ({ //destructure the object , if no, empty object
    type:'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

