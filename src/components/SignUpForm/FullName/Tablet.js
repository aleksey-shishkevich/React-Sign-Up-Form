import React from 'react';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
import Input from '../items/Input'
import Button from '../items/Button'
const { ALMOST_DONE2, JOIN, FIRST_NAME, LAST_NAME, SIGN_UP} = require('../lib/strings').default;

export default (props) => <React.Fragment>
	<GreenCopy style={{fontSize: 55}}>{JOIN}</GreenCopy>
	<GrayCopy numberOfLines={1}>{ALMOST_DONE2}</GrayCopy>
    <div style={{display: 'flex', flexDirection: 'row'}}>
    	<Input ref={props.firstname}  value={props.value.firstname} style={{width:'50%', marginTop: 15}} placeholder={FIRST_NAME}/>
    	<div style={{width: 10}}/>
    	<Input ref={props.lastname}  value={props.value.lastname} style={{width:'50%', marginTop: 15}} placeholder={LAST_NAME}/>
    	<div style={{width: 10}}/>
    	<Button style={{minWidth: 120, marginTop: 15}} onPress={props.signUp}>{SIGN_UP}</Button>
    </div>	
</React.Fragment>