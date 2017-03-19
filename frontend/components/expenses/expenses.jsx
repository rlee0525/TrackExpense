import React from 'react';
import Navbar from '../navbar/navbar_container';
import ExpenseDetail from './expense_detail_container';
import { values } from 'lodash';

class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
  }

  componentDidMount() {
    this.props.requestExpenses();
    this.props.clearErrors();
  }

  render() {
    let expenses = values(this.props.expenses).sort((a, b) => {
      return Date.parse(a.datetime) - Date.parse(b.datetime);
    });

    return (
      <div>
        <Navbar />
        <div className="expenses-title">
          <ul className="expenses-title-ul">
            <li className="expense-date-title">Date</li>
            <li className="expense-time-title">Time</li>
            <li className="expense-amount-title">Amount</li>
            <li className="expense-description-title">Description</li>
            <button className="add-expense">+ Expense</button>
          </ul>
        </div>
        <div className="expenses-list">
          {expenses.map(expense => (
            <div key={Math.random()}
                 className="expense-list-item">
              <li key={Math.random()} className="expenses-li">
                <ExpenseDetail expense={ expense } />
              </li>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Expenses;
