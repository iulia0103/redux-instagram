function posts(state=[], action){
  switch (action.type) {
    case 'INCREMENT_LIKES':
    const i = action.index;
      return [
        ...state.slice(0,i), //before the one needed for update
        {...state[i], likes: state[i].likes+1}, //similar to Object.assign()
        ...state.slice(i+1)//after the one needed
      ]
      break;
    default:
      return state;
  }
}

export default posts;
