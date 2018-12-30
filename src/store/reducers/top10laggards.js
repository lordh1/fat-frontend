import {
  GET_TOP10LAGGARDS
} from '../actions/top10laggards'

const initState = [];
export const top10laggards = (state = initState, action) => {
    switch (action.type) {
      case GET_TOP10LAGGARDS:
        return action.top10laggards
      default:
        return state
    }
};
