import React from 'react';
import Modal from 'react-modal';
import { values } from 'lodash';
import Navbar from '../navbar/navbar_container';
import ExpenseDetail from './expense_detail_container';
import ExpenseFormContainer from './expense_form_container';

class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  componentWillUnmount() {
    this.closeModal();
  }

  componentWillMount() {
    Modal.setAppElement('body');
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
            <button className="add-expense" id="add-expense"
                    onClick={this.openModal}>+ Expense</button>
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
        <Modal
          className="expense-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={() => { this.props.clearErrors(); this.closeModal(); }}
          contentLabel="expense-modal">
          <ExpenseFormContainer closeModal={this.closeModal} />
        </Modal>
      </div>
    )
  }
}

export default Expenses;
