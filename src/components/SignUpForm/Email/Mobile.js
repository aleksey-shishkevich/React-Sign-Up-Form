import React from 'react';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
import Input from '../items/Input'
import Button from '../items/Button'
import PrivacyPolicy from '../items/PrivacyPolicy'
const { SIGNUP2, JOIN, NEXT, ENTER_EMAIL, POLICY} = require('../lib/strings').default;


export default (props) => <React.Fragment>
	<GreenCopy style={{fontSize: 40}}>{JOIN}</GreenCopy>
	<GrayCopy numberOfLines={2}>{SIGNUP2}</GrayCopy>
    <Input ref={props.email} value={props.value.email} style={{width: '100%', marginTop: 15}} placeholder={ENTER_EMAIL}/>
	<Button style={{width: '100%', marginTop: 15}} onPress={props.checkEmail}>{NEXT}</Button>
	<PrivacyPolicy style={{width: '100%', marginTop: 15}} txtStyle={{fontSize: 12}} numberOfLines={3} isChecked={props.privacy} onClick={props.togglePrivacyCheckBox}>{POLICY}</PrivacyPolicy>
</React.Fragment>