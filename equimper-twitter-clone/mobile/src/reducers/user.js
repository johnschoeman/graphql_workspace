const initialState = {
  isAuthenticated: false,
  info: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('inreducer')
      return {
        ...state,
        isAuthenticated: true
      }
    default:
      return state;
  }
};
