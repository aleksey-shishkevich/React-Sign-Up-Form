import React from 'react';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
import Input from '../items/Input'
import Button from '../items/Button'
import PrivacyPolicy from '../items/PrivacyPolicy'
const { SIGNUP, JOIN, NEXT, ENTER_EMAIL, POLICY2} = require('../lib/strings').default;
import style from "./Desktop.less";

export default (props) => <div className={style.container}>
	<div className={style.item12}>
		<GreenCopy style={{fontSize: 55}}>{JOIN}</GreenCopy>
	</div>
	<div className={style.item21}><GrayCopy numberOfLines={1} style={{textAlign: 'left'}}>{SIGNUP}</GrayCopy></div>
	<div className={style.item22}><Input ref={props.email} style={{width: '100%'}} placeholder={ENTER_EMAIL}/></div>
	<div className={style.item23}>
		<PrivacyPolicy numberOfLines={2} isChecked={props.privacy} onClick={props.togglePrivacyCheckBox}>
			{POLICY2}
		</PrivacyPolicy>
	</div>
	<div className={style.item32}>
		<Button style={{minWidth: 120}} onPress={props.checkEmail}>{NEXT}</Button>
	</div>
</div>
