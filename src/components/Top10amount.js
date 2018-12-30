import React from 'react'
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import {GenerateTop10Amount} from "../store/actions/top10amount";


class Top10amount extends React.PureComponent {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    generate = () => {
        const { dispatch, invoices } = this.props;
        dispatch(GenerateTop10Amount(invoices));
    }

    render () {
      const { top10amount } = this.props

      return (
            <div>
                <h1 className="App__h1">TOP 10 AMOUNT</h1>
                <div className="App__ButtonsArea">
                    <button className="App__button" onClick={this.generate}>Calculate</button>
                </div>
              <h1 className="App__h1">React Repo Invoices</h1>
              <table className="App__table">
                <thead>
                <tr>
                  <th>No.</th>
                  <th>Client ID</th>
                  <th>Amount (PLN)</th>
                </tr>
                </thead>
                <tbody>
                {top10amount.map((item, i) =>
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.key}</td>
                    <td>{item.value}</td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
  const { invoices, top10amount } = state

  return {
    invoices, top10amount
  }
}

export default connect(mapStateToProps)(Top10amount)
