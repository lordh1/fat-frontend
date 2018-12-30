export const GET_INVOICES = 'GET_INVOICES'
export const FLUSH_INVOICES = 'FLUSH_INVOICES'

export const ReceiveInvoices = (invoices) => ({
  type: GET_INVOICES,
  invoices: invoices
})

// const apiUrl = 'https://api.github.com/repos/facebook/react/issues'
const apiUrl = process.env.REACT_APP_API_URL + '/?m=Faktury&f=listafull_json&blank=1&' + process.env.REACT_APP_CREDENTIALS;

export const FetchInvoices = () => async (dispatch) => {

  let options = {
    method: 'GET'
  }

  fetch(apiUrl, options)
    .then(response => response.json())
    .then(invoices => {
      dispatch(ReceiveInvoices(invoices.lista))
    })
    .catch(error => {
      throw(error)
    })
}


