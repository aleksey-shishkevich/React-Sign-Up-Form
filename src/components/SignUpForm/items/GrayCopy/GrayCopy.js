/**
 * Gray copy
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import style from "./GrayCopy.less";


export default (props) => <div className={style.text} style={props.style}>
	{props.children}	
</div>
