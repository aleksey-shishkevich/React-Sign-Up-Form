import React from 'react';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
const { CONGRATULATIONS, LOOK_OUT, THANK_YOU } = require('../lib/strings').default;

export default (props) => <React.Fragment>
	<GreenCopy style={{fontSize: 40}}>{CONGRATULATIONS}</GreenCopy>
	<GrayCopy numberOfLines={2}  style={{fontSize: 22, marginTop: 10}}>{THANK_YOU}</GrayCopy>
	<GrayCopy numberOfLines={2}  style={{fontSize: 16, fontFamily: 'Azo-Sans', marginTop: 15}}>{LOOK_OUT}</GrayCopy>
</React.Fragment>