/**
 * Red button
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import style from "./Button.less";


export default (props) => <button className={style.button} 
								style={props.style}
								disabled={props.disabled}
								onClick={props.onPress}>
	{props.children}	
</button>
