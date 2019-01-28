import React from 'react';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
const { CONGRATULATIONS, LOOK_OUT2, THANK_YOU2 } = require('../lib/strings').default;

export default (props) => <React.Fragment>
	<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
		<GreenCopy style={{fontSize: 55, height: 60, marginRight: 20}}>{CONGRATULATIONS}</GreenCopy>
		<div>
			<GrayCopy numberOfLines={1}  style={{fontSize: 30}}>{THANK_YOU2}</GrayCopy>
			<GrayCopy numberOfLines={1}  style={{fontSize: 18, fontFamily: 'Azo-Sans'}}>{LOOK_OUT2}</GrayCopy>
		</div>
	</div>
</React.Fragment>