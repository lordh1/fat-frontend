import React from 'react'
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import {FetchPayments} from "../store/actions/payments";

class Payments extends React.PureComponent {
    static propTypes = {
        payments: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
      const { payments } = this.props
      if(!payments.length) this.getPayments()
    }

    getPayments = () => {
        const { dispatch } = this.props
        dispatch(FetchPayments())
    }

    render() {
        const { payments } = this.props

        return (
            <div>
            <h1 className="App__h1">React Repo Payments ({payments.length})</h1>
            <table className="App__table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Date</th>
                  <th>Client ID</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
              {payments.slice(0,10).map((payment, i) =>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{payment.data}</td>
                  <td>{payment.id_klienta}</td>
                  <td>{payment.kwota}</td>
                </tr>
              )}
              </tbody>
            </table>
            </div>
        )
    }
}

Payments.propTypes = {
  payments: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    const { payments, payment } = state

    return {
        payments, payment
    }
}

export default connect(mapStateToProps)(Payments)
