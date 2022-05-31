import combinedReducer from '../reducers/combinedReducer'

export default async function getFinalStateFromAction(store, action) {

  await store.dispatch(action())
  
  return store.getActions().reduce((acc, item) => {
      return combinedReducer(acc, item)
    }, store.getState())
}