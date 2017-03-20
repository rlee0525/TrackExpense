import React from 'react';
import moment from 'moment';

class UserExpenseDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let expense = this.props.expense;

    return (
      <div className="user-expense-detail">
        <ul className='user-expense-ul'>
          <li className="user-expense-date">
            {moment(expense.datetime).format("YYYY-MM-DD")}
          </li>
          <li className="user-expense-time">
            {moment(expense.datetime).format("HH:mm:ss a")}
          </li>
          <li className="user-expense-amount">
            ${expense.amount}
          </li>
          <li className="user-expense-description">
            {expense.description}
          </li>
        </ul>
      </div>
    )
  }
}

export default UserExpenseDetail;
