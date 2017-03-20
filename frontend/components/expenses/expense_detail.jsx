import React from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';
import ExpenseFormContainer from './expense_form_container';

class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      time: "",
      amount: 0,
      description: "",
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(id) {
    this.props.destroyExpense(id);
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
            {moment(expense.datetime).format("HH:mm:ss a")}
          </li>
          <li className="expense-amount">
            ${expense.amount.toFixed(2)}
          </li>
          <li className="expense-description">
            {expense.description}
          </li>
          <button className="edit-expense-button"
            onClick={this.openModal} >
            <FontAwesome
              className='fa-pencil'
              name='editbutton'
              id='fa-pencil' />
          </button>
          <button className="delete-expense-button"
            onClick={() => this.handleDelete(expense.id)} >
            <FontAwesome
              className='fa-trash-o'
              name='trashbutton'
              id='fa-trash-o' />
          </button>
        </ul>

        <Modal
          className="expense-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={() => { this.props.clearErrors(); this.closeModal(); }}
          contentLabel="expense-modal">
          <ExpenseFormContainer expense={expense}
                                closeModal={this.closeModal} />
        </Modal>
      </div>
    )
  }
}

export default Expenses;
