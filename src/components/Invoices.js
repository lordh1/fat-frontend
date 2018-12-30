import React from 'react'
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import {FetchInvoices} from "../store/actions/invoices";

class Invoices extends React.PureComponent {
    static propTypes = {
        invoices: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
      const { invoices } = this.props
      if(!invoices.length) this.getInvoices()
    }

    getInvoices = () => {
        const { dispatch } = this.props
        dispatch(FetchInvoices())
    }

    render() {
        const { invoices } = this.props

        return (
            <div>
            <h1 className="App__h1">React Repo Invoices ({invoices.length})</h1>
            <table className="App__table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Number</th>
                  <th>Date</th>
                  <th>Client ID</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
              {invoices.slice(0,10).map((invoice, i) =>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{invoice.numer}</td>
                  <td>{invoice.data}</td>
                  <td>{invoice.id_klienta}</td>
                  <td>{invoice.kwota}</td>
                </tr>
              )}
              </tbody>
            </table>
            </div>
        )
    }
}

Invoices.propTypes = {
  invoices: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    const { invoices, invoice } = state

    return {
        invoices, invoice
    }
}

export default connect(mapStateToProps)(Invoices)
