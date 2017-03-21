import React from 'react';
import moment from 'moment';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: null,
      time: null,
      amount: null,
      description: null,
      id: null,
      user_id: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.expense) {
      let expense = this.props.expense;
      let id = expense.id;
      let date = moment(expense.datetime).format("YYYY-MM-DD");
      let time = moment(expense.datetime).format("HH:mm:ss");
      let amount = expense.amount;
      let description = expense.description;
      let user_id = expense.user_id;

      this.setState({
        date,
        time,
        amount,
        description,
        id,
        user_id
      });
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    const that = this;
    e.preventDefault();
    let datetime = this.state.date + " " + this.state.time;

    const expense = {
      datetime,
      amount: this.state.amount,
      description: this.state.description,
      user_id: this.state.user_id,
      id: this.state.id
    };
    if (this.props.expense) {
      this.props.updateExpense(expense)
        .then(that.props.closeModal)
        .fail((error) => console.log(error));
    } else {
      this.props.createExpense(expense)
        .then(that.props.closeModal)
        .fail((error) => console.log(error));
    }
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    let buttonText = this.props.expense ? "UPDATE" : "CREATE";

    return (
      <div className="expense-box">
        <div className="expense-box-inputs">
          <div className="errors-container">
            {this.props.errors && this.renderErrors()}
          </div>

          <label>
            <div className="expense-form-title">Date</div>
            <input type="text"
              placeholder={this.state.date ? this.state.date : "YYYY-MM-DD"}
              className="expense-input-field"
              id="date"
              value={this.state.date}
              onChange={this.update('date')}
              required />
          </label>

          <label>
            <div className="expense-form-title">Time</div>
            <input type="text"
              placeholder={this.state.time ? this.state.time : "HH:mm:ss"}
              className="expense-input-field"
              id="time"
              value={this.state.time}
              onChange={this.update('time')}
              required />
          </label>

          <label>
            <div className="expense-form-title">Amount</div>
            <input type="text"
              placeholder={this.state.amount ? this.state.amount : "0.00"}
              className="expense-input-field"
              id="amount"
              value={this.state.amount}
              onChange={this.update('amount')}
              required />
          </label>

          <label>
            <div className="expense-form-title">Description</div>
            <input type="text"
              placeholder={this.state.description ? this.state.description : "I bought something!"}
              className="expense-input-field"
              id="description"
              value={this.state.description}
              onChange={this.update('description')}
              required />
          </label>
          <div className="expense-form-button">
            <button id="expense-form-button" type="submit"
                    onClick={this.handleSubmit}>{buttonText}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ExpenseForm;
