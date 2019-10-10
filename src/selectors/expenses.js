//Get visible expenses
export default (expenses,{text, sortBy, startDate, endDate}) => {
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