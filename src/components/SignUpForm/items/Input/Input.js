/**
 * Styled text input field. Email validation
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import style from "./Input.less";
import autobind from 'autobind-decorator'

@autobind
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: props.value || '' };
    }
    
    value() {
	    return this.state.text
    }
    
    onChange(event) {
	    this.setState({text: event.target.value});
    }
        
    isEmailValid() {
		let email = this.state.text
		let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return pattern.test(String(email).toLowerCase())
	}

	render() {
        return (
	        <input
	        	ref={c=>this.input=c}
	        	className={style.input}
		        style={this.props.style}
		        onChange={this.onChange}
		        value={this.state.text}
		        placeholder={this.props.placeholder}
		    />
	)}
}




