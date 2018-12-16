export const GET_I_NAME ='ADMIN_INDICATION.GET_I_NAME';
export const FETCH_INDICATION = 'ADMIN_INDICATION.FETCH_INDICATION';
export const FETCH_INDICATION_SUCCESS = 'ADMIN_INDICATION.FETCH_SUCCESS';
export const FETCH_INDICATION_FAILURE = 'ADMIN_INDICATION.FETCH_FAILURE';
export const DELETE_INDICATION = 'ADMIN_INDICATION.DELETE_INDICATION';
export const DELETE_INDICATION_SUCCESS = 'ADMIN_INDICATION.DELETE_SUCCESS';
export const DELETE_INDICATION_FAILURE = 'ADMIN_INDICATION.DELETE_FAILURE';

export const getName = name => ({
    type: GET_I_NAME,
    payload : {
        name
    }
});


export const fetchIndication = () => ({
    type: FETCH_INDICATION,
});

export const fetchIndicationSuccess = indication => ({
    type: FETCH_INDICATION_SUCCESS,
    payload: {indication}
});

export const fetchIndicationFailure = error => ({
    type: FETCH_INDICATION_FAILURE,
    payload: {error}
});

export const startFetchIndication = () => (dispatch, getState, { api }) => {
  dispatch(fetchIndication());
  api
  .get(`indication/list`)
  .then(({ data }) => {
      let {indication} = data;
    dispatch(fetchIndicationSuccess(indication));
  })
  .catch(fetchIndicationFailure("Failed to fetch indication"));
}

 // -- DELETE -- //

 export const deleteIndication = () => ({
    type: DELETE_INDICATION,
});

export const deleteIndicationSuccess = response => ({
    type: DELETE_INDICATION_SUCCESS,
    payload: {response}
});

export const deleteIndicationFailure = error => ({
    type: DELETE_INDICATION_FAILURE,
    payload: {error}
});

export const startDeleteIndication = (indicationId) => (dispatch, getState, { api }) => {
  dispatch(deleteIndication());
  api
  .post(`indication/deleteindication/${indicationId}`)
  .then(() => {
    dispatch(deleteIndicationSuccess(`Deleted indicationination with ID ${indicationId}`));
  })
  .catch(deleteIndicationFailure("Failed to delete indication"));
  dispatch(startFetchIndication())
}

/* Just a start of an experiment */
/*
export const startDeleteStory = () => (dispatch, getState, {api}) => {
  dispatch(deleteStory());
  api
  .post('story/deletestory/:id', deleteStoryController)
  .catch(deleteStoryFailure("Failed to delete the story"));
}
*/
