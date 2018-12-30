import { combineReducers } from 'redux'
import { invoices } from './reducers/invoices'
import { payments } from './reducers/payments'
import { top10amount } from './reducers/top10amount'
import { top10laggards } from './reducers/top10laggards'

const rootReducer = combineReducers({
  invoices: invoices,
  payments: payments,
  top10amount: top10amount,
  top10laggards: top10laggards
})

export default rootReducer
