import React from 'react';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
import Input from '../items/Input'
import Button from '../items/Button'
const { ALMOST_DONE2, JOIN, FIRST_NAME, LAST_NAME, SIGN_UP} = require('../lib/strings').default;
import style from "./Desktop.less";


export default (props) => <div className={style.container}>
	<div className={style.item12}>
		<GreenCopy style={{fontSize: 55}}>{JOIN}</GreenCopy>
	</div>
	<div className={style.item21}><GrayCopy numberOfLines={1} style={{fontSize: 18}}>{ALMOST_DONE2}</GrayCopy></div>
	
	<div  className={style.item22}>
		<Input ref={props.firstname} value={props.value.firstname} style={{width:'50%'}} placeholder={FIRST_NAME}/>
    	<div style={{width: 10}}/>
    	<Input ref={props.lastname} value={props.value.lastname} style={{width:'50%'}} placeholder={LAST_NAME}/>
    	<div style={{width: 20}}/>
    	<Button style={{minWidth: 120}} onPress={props.signUp}>{SIGN_UP}</Button>
	</div>
</div>