import {
  GET_TOP10AMOUNT
} from '../actions/top10amount'

const initState = []
export const top10amount = (state = initState, action) => {
    switch (action.type) {
      case GET_TOP10AMOUNT:
        return action.top10amount
      default:
        return state
    }
}
