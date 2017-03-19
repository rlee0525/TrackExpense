import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      time: "",
      amount: 0,
      description: ""
    };
  }

  render() {
    let expense = this.props.expense;

    return (
      <div className="expense-detail">
        <ul className='expense-ul'>
          <li className="expense-date">
            {moment(expense.datetime).format("YYYY-MM-DD")}
          </li>
          <li className="expense-time">
            {moment(expense.datetime).format(" HH:mm:ss a")}
          </li>
          <li className="expense-amount">
            ${expense.amount}
          </li>
          <li className="expense-description">
            {expense.description}
          </li>
          <button className="edit-expense-button"
            onClick={() => console.log("DELETE")} >
            <FontAwesome
              className='fa-pencil'
              name='editbutton'
              id='fa-pencil' />
          </button>
          <button className="delete-expense-button"
            onClick={() => console.log("DELETE")} >
            <FontAwesome
              className='fa-trash-o'
              name='trashbutton'
              id='fa-trash-o' />
          </button>
        </ul>
      </div>
    )
  }
}

export default Expenses;
