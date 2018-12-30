import {
  GET_PAYMENTS,
  FLUSH_PAYMENTS
} from '../actions/payments'

const initState = []
export const payments = (state = initState, action) => {
    switch (action.type) {
      case GET_PAYMENTS:
        return action.payments
      case FLUSH_PAYMENTS:
        return initState
      default:
        return state
    }
}
