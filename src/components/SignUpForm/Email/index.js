/**
 * Render for 'Email' state depending on device
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';

import Tablet from './Tablet';
import Mobile from './Mobile';
import Desktop from './Desktop';


export default (props) => {
	switch (props.layout) {
		case 'TABLET': return <Tablet {...props}/>
		case 'PHONE': return <Mobile {...props}/>
		case 'DESKTOP': return <Desktop {...props}/>
	}	
}