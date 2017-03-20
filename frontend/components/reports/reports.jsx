import React from 'react';
import Modal from 'react-modal';
import { values } from 'lodash';
import Navbar from '../navbar/navbar_container';

class Reports extends React.Component {
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
    this.props.clearErrors();
  }

  render() {
    let reports = values(this.props.reports).sort((a, b) => {
      return Date.parse(a.datetime) - Date.parse(b.datetime);
    });

    return (
      <div>
        <Navbar />

        Reports
      </div>
    )
  }
}

export default Reports;
