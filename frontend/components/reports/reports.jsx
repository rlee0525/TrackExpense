import React from 'react';
import moment from 'moment';
import Modal from 'react-modal';
import { values } from 'lodash';
import Navbar from '../navbar/navbar_container';

class Reports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      endDate: "",
      customView: false,
      weeks: {},
      dateRange: {}
    };

    this.handleWeeks = this.handleWeeks.bind(this);
    this.handleCustom = this.handleCustom.bind(this);
  }

  componentDidMount() {
    this.props.requestExpenses();
    this.createWeeks();
    this.props.clearErrors();
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  customView() {
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    let expenses = values(this.props.expenses).filter(expense => (
      moment(expense.datetime).isBetween(startDate, endDate)
    ));

    return (
      <div className="weeks-custom-container">
        <div className="weeks-custom-title">
          <div>
            Date
          </div>
          <div>
            Time
          </div>
          <div>
            Amount
          </div>
          <div>
            Description
          </div>
        </div>
        <div className="weeks-custom-list">
          {expenses.map(expense => (
            <div key={Math.random()} className="weeks-custom-item">
              <div className="custom-date">
                {moment(expense.datetime).format("YYYY-MM-DD")}
              </div>
              <div className="custom-time">
                {moment(expense.datetime).format("HH:mm:ss a")}
              </div>
              <div className="custom-amount">
                ${expense.amount.toFixed(2)}
              </div>
              <div className="custom-description">
                {expense.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  weeksView() {
    let weeks = this.state.weeks;
    let dateRange = this.state.dateRange;

    return (
      <div className="weeks-view-container">
        <div className="weeks-view-title">
          <div>
            Week #
          </div>
          <div>
            Dates
          </div>
          <div>
            Total
          </div>
        </div>
        <div className="weeks-view-list">
          {Object.keys(weeks).map(week => (
            <div key={Math.random()} className="weeks-view-item">
              <div className="week-number">
                {week}
              </div>
              <div className="date-range">
                {dateRange[week]}
              </div>
              <div className="total">
                ${weeks[week].toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  handleWeeks() {
    this.setState({
      customView: false
    });
  }

  handleCustom() {
    this.setState({
      customView: true
    });
  }

  createWeeks() {
    let expenses = values(this.props.expenses).sort((a, b) => {
      return Date.parse(a.datetime) - Date.parse(b.datetime);
    });

    let dates = {};
    let startDate = moment(Date.parse(2017, 1, 1));
    let currentDate = moment(Date.now());


    while (currentDate >= startDate) {
      dates[moment(startDate).format('YYYY-MM-DD')] = 0;
      startDate = moment(startDate).add(7, 'days');
    }

    expenses.map(expense => {
      Object.keys(dates).forEach(start => {
        if (moment(expense.datetime).isBetween(start, moment(start).add(7, 'days'))) {
          dates[start] += expense.amount;
          return;
        }
      })
    })

    let weeks = {};
    let amount = values(dates);

    for (var i = 0; i < amount.length; i++) {
      weeks[`Week ${i + 1}`] = amount[i];
    }

    let dateRange = {};
    let weeksArr = Object.keys(weeks);
    let datesArr = Object.keys(dates);

    for (var i = 0; i < weeksArr.length; i++) {
      dateRange[weeksArr[i]] = `${datesArr[i]} - ${moment(datesArr[i]).add(7, 'days').format('YYYY-MM-DD')}`;
    }

    this.setState({ weeks, dateRange });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="reports-div">
          <div className="reports-buttons-sort">
            <div className="defined-weeks" onClick={this.handleWeeks}>
              <p id="reports-weeks">WEEKS</p>
            </div>
            <div id="divider"></div>
            <form className="custom-dates">
              <label>
                <input type="text"
                  placeholder="Start Date"
                  className="date-input-field"
                  value={this.state.startDate}
                  onChange={this.update('startDate')}
                  required />
              </label>
              <label>
                <input type="text"
                  placeholder="End Date"
                  className="date-input-field"
                  value={this.state.endDate}
                  onChange={this.update('endDate')}
                  required />
              </label>
              <button id="custom-search-date" onClick={this.handleCustom}>
                SEARCH
              </button>
            </form>
          </div>

          <div className="reports-detail">
            <div className="reports-detail-heading">
              {this.state.customView ? `${moment(this.state.startDate).format('YYYY-MM-DD')} - ${moment(this.state.endDate).format('YYYY-MM-DD')}` : 2017}
            </div>

            <div className="reports-detail-main">
              {this.state.customView ? this.customView() : this.weeksView()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Reports;
