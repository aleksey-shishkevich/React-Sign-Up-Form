/**
 * Render for 'Congratulations' state depending on device
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';

import Mobile from './Mobile';
import Tablet from './Tablet';
import Desktop from './Desktop';


export default (props) => {
	switch (props.layout) {
		case 'PHONE': return <Mobile {...props}/>
		case 'TABLET': return <Tablet {...props}/>
		case 'DESKTOP': return <Desktop {...props}/>
	}	
}