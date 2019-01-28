/**
 * Privacy Policy agreement with hand made checkbox 
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import style from "./PrivacyPolicy.less";


export default (props) => <div className={style.box} style={props.style}>
	<input type='checkbox' className={style.checkbox} onClick={props.onClick} defaultChecked={props.isChecked}/>
	<div className={style.text} style={props.txtStyle}>
		{props.children}	
		<a className={style.link} target={'_blank'} href={'https://corporate.discovery.com/privacy-policy/'}>
			Privacy Policy
		</a>		
	</div>
</div>



