import {createStore} from 'redux'; //wants to create a store

//Action generators - function that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({ 
    type: 'INCREMENT',
    //incrementBy: typeof payload.incrementby === 'number' ? payload.incrementBy : 1
    incrementBy
})
    
const decrementCount = ({decrementBy = 1} = {}) => ({ 
    type: 'DECREMENT',
    //decrementBy: typeof payload.decrementby === 'number' ? payload.decrementBy : 1
    decrementBy
})

//make a store
const store = createStore((state = {count: 0},action) => {
    switch (action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy:1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':   
            //const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy:1;
            return {
                count: state.count - action.decrementBy
            }   
        case 'RESET':
                return {
                    count: 0
                }    
        case 'SET':
                return {
                    count: action.count
                }                           
        default:
            return state    
    }
    
})
//state= currentstate (use default state provided if no state change)
store.getState(); //return current state obj


console.log('initial value',store.getState()); 

//fire every single time the store changes
store.subscribe(() => {
    console.log(store.getState());
});

//Actions - nothing more than an object that gets sent to the store
//type of action - increment, decrement, reset

store.dispatch(incrementCount())
store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch({
//     type: 'INCREMENT', //property: action name
//     incrementBy: 5
// })

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 2
// })

store.dispatch({
    type: 'RESET'
})

// store.dispatch({
//     type: 'DECREMENT'
// })
// store.dispatch({
//     type: 'INCREMENT'
// })

store.dispatch({
    type: 'SET',
    count: 101
})

console.log('final result',store.getState()); 