import { COUNTER_ADD } from '../../actions/counterActions'

function counter (state = 0, action) {
  switch (action.type) {
    case COUNTER_ADD:
      return state + 1
    default:
      return state
  }
}

export default counter

