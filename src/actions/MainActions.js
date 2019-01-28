/**
 * main actions
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

const ActionTypes = require('../constants/ActionTypes').default;

var existingEmail = null


function message(msg) {
  return {
    type: ActionTypes.SET_CONFIRMATION_MESSAGE,
    payload: msg
  };
}

function checkEmailRequest() {
  return {
    type: ActionTypes.CHECK_EMAIL_REQUEST
  };
}

function checkEmailSuccess(result) {
  return {
    type: ActionTypes.CHECK_EMAIL_SUCCESS,
    payload: result
  };
}

function checkEmailFailure(error) {
  return {
    type: ActionTypes.CHECK_EMAIL_FAILURE,
    payload: error
  };
}


export function checkEmail(email) {
  if (!existingEmail) existingEmail = email
  return (dispatch) => {
    dispatch(checkEmailRequest());
    setTimeout(()=>{
	    if (existingEmail == email) {
		    dispatch(message('This email address is already in the list'))
		    dispatch(checkEmailFailure('Existing email'))
	    } else {
		    dispatch(checkEmailSuccess(email));
	    }	    	    
    }, 1000)    
  };
}

function signUpRequest() {
  return {
    type: ActionTypes.SIGN_UP_REQUEST
  };
}

function signUpSuccess(result) {
  return {
    type: ActionTypes.SIGN_UP_SUCCESS,
    payload: result
  };
}

function signUpFailure(error) {
  return {
    type: ActionTypes.SIGN_UP_FAILURE,
    payload: error
  };
}

export function signUp(email,  firstname, lastname) {
  return (dispatch) => {
    dispatch(signUpRequest());
    setTimeout(()=>{
	    	console.log('USERDATA', {email,  firstname, lastname})
		    dispatch(signUpSuccess("OK"));
    }, 1000)    
  };
}

export function setConfirmationMessage(data){
    return {
        type: ActionTypes.SET_CONFIRMATION_MESSAGE,
        payload: data
  };
}
