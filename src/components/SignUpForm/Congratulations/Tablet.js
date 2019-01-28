import React from 'react';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
const { CONGRATULATIONS, LOOK_OUT2, THANK_YOU2 } = require('../lib/strings').default;

export default (props) => <React.Fragment>
	<GreenCopy style={{fontSize: 55}}>{CONGRATULATIONS}</GreenCopy>
	<GrayCopy numberOfLines={1}  style={{fontSize: 30, marginTop: 10}}>{THANK_YOU2}</GrayCopy>
	<GrayCopy numberOfLines={1}  style={{fontSize: 18, fontFamily: 'Azo-Sans', marginTop: 15}}>{LOOK_OUT2}</GrayCopy>
</React.Fragment>