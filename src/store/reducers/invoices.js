import {
  GET_INVOICES,
  FLUSH_INVOICES
} from '../actions/invoices'

const initState = []
export const invoices = (state = initState, action) => {
    switch (action.type) {
      case GET_INVOICES:
        return action.invoices
      case FLUSH_INVOICES:
        return initState
      default:
        return state
    }
}
