import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

import { connect } from 'react-redux';//connect component with store

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses, state.filters),
        filters : state.filters
    }
}

// const mapStateToProps = (state) => {
//     return {
//         expenses : state.expenses,
//         filters : state.filters
//     }
// }

export default connect(mapStateToProps)(ExpenseList);
// //HOC
// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);

// export default ConnectedExpenseList;