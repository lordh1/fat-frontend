export const GET_PAYMENTS = 'GET_PAYMENTS'
export const FLUSH_PAYMENTS = 'FLUSH_PAYMENTS'

export const ReceivePayments = (payments) => ({
  type: GET_PAYMENTS,
  payments: payments
})

// const apiUrl = 'https://api.github.com/repos/facebook/react/issues'
const apiUrl = process.env.REACT_APP_API_URL + '/?m=Platnosci&f=listafull_json&blank=1&' + process.env.REACT_APP_CREDENTIALS;

export const FetchPayments = () => async (dispatch) => {

  let options = {
    method: 'GET'
  }

  fetch(apiUrl, options)
    .then(response => response.json())
    .then(payments => {
      // console.log(payments.lista)
      dispatch(ReceivePayments(payments))
    })
    .catch(error => {
      throw(error)
    })
}


