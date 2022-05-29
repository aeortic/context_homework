import axios from 'axios'

import {
  LOAD_CLIENT_LIST_REQUEST,
  LOAD_CLIENT_LIST_SUCCESS,
  LOAD_CLIENT_LIST_ERROR,
} from '../constants/client-action-types'

const loadClientListRequest = () => {
  // This action will allow us to show a loading indicator
  // in the event of a slow network or a particularly large
  // payload.
  return {
    type: LOAD_CLIENT_LIST_REQUEST,
  }
}

const loadClientListSuccess = (clientList) => {
  return {
    type: LOAD_CLIENT_LIST_SUCCESS,
    payload: clientList
  }
}

const loadClientListError = (error) => {
  // display an error to the user
  window.alert("The list of clients could not be fetched.\n\nReload the page to try again. If you continue to experience this error, contact the administrator at seminative@gmail.com")
}

export const loadClientList = () => {
  return dispatch => {
    dispatch(loadClientListRequest())
    // we can further abstract this using environmental variables
    // to differentiate between dev and prod environments
    return axios(`http://localhost:3001/client_list`)
      .then((response) => {
        const clientList = response.data || []
        dispatch(loadClientListSuccess(clientList))
      }).catch((error) => {
        dispatch(loadClientListError(error))
      })
  }
}