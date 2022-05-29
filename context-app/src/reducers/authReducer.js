// just a stub for now, but this is where we'd keep our authorization credentials
// in a more mature app...

const initialState = {
  auth: undefined,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) { 
    default: 
      return state
  }
}

export default authReducer
