/**
 * "SignUpForm" component
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

import React, {Component} from 'react';

import autobind from 'autobind-decorator'
import {
  isTablet,
  isMobile
} from "react-device-detect";

import Email from '../Email';
import FullName from '../FullName';
import Congratulations from '../Congratulations';
import GreenCopy from '../items/GreenCopy';
import PrivacyPolicy from '../items/PrivacyPolicy';
import Button from '../items/Button';
import Input from '../items/Input';
import Spinner from '../items/Spinner';

import style from "./SignUp.less";

@autobind
export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { layout: this.getLayout(), privacy: false, email: '', firstname: '', lastname: '' };
    }
    
    componentDidMount() {
	    if (this.block && this.block.clientHeight) {
		    this.setState({minheight: this.block.clientHeight})
	    }
		window.onresize = ()=>{
			const layout = this.getLayout()
			if (layout != this.state.layout) {
				if (this.block && this.block.clientHeight && this.props.state == 'EMAIL') {
				    this.setState({minheight: this.block.clientHeight})
			    }
				let email = this.email ? this.email.value() : ''
			    let firstname = this.firstname ? this.firstname.value() : ''
			    let lastname = this.lastname ? this.lastname.value() : ''
			    this.setState({layout, email, firstname, lastname})
			}
		}
    }
    
    getLayout() {
	    const {innerHeight, innerWidth} = window
        let layout = 'DESKTOP'
        if (isMobile && !isTablet) {
		    layout = 'PHONE'
	    }
	    if (isTablet) {
		    if (innerHeight > innerWidth) layout = 'TABLET'
		    else layout = 'DESKTOP'
	    }
	    return layout
    }
    
    checkEmail() {
	    if (!this.email.isEmailValid()) {
		    return this.props.message('Email address is not valid')
	    }
	    if (!this.state.privacy) {
		    return this.props.message('To continue you must agree to the Privacy Policy')
	    }
	    this.props.checkEmail(this.email.value())	    
    }

    signUp() {
	    const firstname = this.firstname.value()
	    const lastname = this.lastname.value()
	    if (firstname.length == 0) {
		    return this.props.message('First name is required')
	    }
	    if (lastname.length == 0) {
		    return this.props.message('Last name is required')
	    }
	    this.props.signUp(firstname, lastname)	    
    }

    
    togglePrivacyCheckBox() {
	    this.setState({privacy: !this.state.privacy})
    }
    

    renderForm() {
	    const {layout, privacy, email, firstname, lastname} = this.state
	    const formState = this.props.state
	    if (formState == 'EMAIL') {
			return <Email 	checkEmail={this.checkEmail} 
							togglePrivacyCheckBox={this.togglePrivacyCheckBox}
							privacy={privacy}
            		   		layout={layout} 
            		   		value={{email}}
					   		email={c=>this.email=c}/>	    
	    } else if (formState == 'FULLNAME') {
		    return <FullName signUp={this.signUp} 
            		   		layout={layout} 
            		   		value={{firstname, lastname}}
					   		firstname={c=>this.firstname=c}
					   		lastname={c=>this.lastname=c}/>
	    } else {
		    return <Congratulations layout={layout}/>
	    }
    }

    
    
    render() {
        return (
            <div ref={c=>this.block=c} className={style.block} style={{minHeight: this.state.minheight}}>
	            	{this.renderForm()}
					{this.props.isFetching && <Spinner/>}
            </div>
        );
    }
}