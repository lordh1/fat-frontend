import React from 'react'
import PropTypes from 'prop-types'
import connect from "react-redux/es/connect/connect";
import {GenerateTop10Laggards} from "../store/actions/top10laggards";


class Top10laggards extends React.PureComponent {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    generate = () => {
        const { dispatch, payments } = this.props;
        dispatch(GenerateTop10Laggards(payments));
    }

    render () {
      const { top10laggards } = this.props

      return (
            <div>
                <h1 className="App__h1">TOP 10 AMOUNT</h1>
                <div className="App__ButtonsArea">
                    <button className="App__button" onClick={this.generate}>Calculate</button>
                </div>
              <table className="App__table">
                <thead>
                <tr>
                  <th>No.</th>
                  <th>Client ID</th>
                  <th>Number of delays</th>
                </tr>
                </thead>
                <tbody>
                {top10laggards.map((item, i) =>
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
  const { payments, top10laggards } = state

  return {
    payments, top10laggards
  }
}

export default connect(mapStateToProps)(Top10laggards)
