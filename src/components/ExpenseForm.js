import React from 'react';
import moment from 'moment';
import { SingleDatePicker }  from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

//const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount:'',
        createdAt: moment(),
        calendarFocused: false
    };
    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState({
            note
        })
        //this.setState(()=>({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;

        if(amount.match(/^\d*(\.\d{0,2})?$/)){ //regex101.com
            this.setState({
                amount
            })
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }
    onFocusChange = ({focused}) => {
        this.setState(() => {
            calendarFocused: focused
        })
    }
    render(){
        return (
            <div>
                <form>
                    <input
                        type='text' placeholder='Description'
                        autoFocus 
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}/>
                    <input
                        type='text' placeholder = 'amount' 
                        value={this.state.amount} 
                        onChange={this.onAmountChange}/>
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange ={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                    />    
                    <textarea 
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.note}
                        onChange = {this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}