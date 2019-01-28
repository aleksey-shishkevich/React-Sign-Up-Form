/**
 * the only one redux container in our app
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import autobind from 'autobind-decorator'

import * as MainActions from '../../actions/MainActions';
import mapDispatchToProps from  '../../lib/mapDispatchToProps';

import SignUpForm from '../SignUpForm';
import style from "./App.less";

const actions = {
    main: MainActions
};

function mapStateToProps(state) {
	return {
		main: state.main,
	};
}

@autobind 
class App extends Component {
	constructor(props) {
		super(props);
	}   

	message(msg) {
		this.props.actions.main.setConfirmationMessage(msg)
	}
	
	checkEmail(email) {
		this.props.actions.main.checkEmail(email)
	}
	
	signUp(firstname, lastname) {
		this.props.actions.main.signUp(this.props.main.email, firstname, lastname)
	}
	
	render() {
		const { actions, main } = this.props;
		return (
			<div className={style.container}>
				<SignUpForm
						isFetching={this.props.main.isFetching}
						state={this.props.main.state}
						message={this.message}
						checkEmail={this.checkEmail}
						signUp={this.signUp}/>
			</div>
		);
	}
}


/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps(actions))(App);