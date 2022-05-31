import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export default function setupMockStore(initialStore) { 
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore(initialStore)

  return store
}