/**
 * Container for Cofirmation Alert
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

import { connect } from 'react-redux';
import mapDispatchToProps from  '../../lib/mapDispatchToProps';
import React from 'react';
import autobind from 'autobind-decorator'
import * as MainActions from '../../actions/MainActions';
import style from "./Confirmation.less";


const actions = {
    main: MainActions
};

function mapStateToProps(state) {
	return {
		main: state.main,
	};
}


@autobind
class Confirmation extends React.Component{
  constructor(props) {
    super(props);
  }	

   componentWillReceiveProps(props) {
	 if (props.main.confirmation && !this.props.main.confirmation) {
	    setTimeout(()=>this.props.actions.main.setConfirmationMessage(null), 2000)	 
     }  
   } 
  	
    render() {
	    let classname = `${style.confirmation} ${this.props.main.confirmation && style.show}`
        return <div onClick={()=>this.props.actions.main.setConfirmationMessage(null)} className={classname}>
			{this.props.main.confirmation}
		</div>;

    }
};

export default connect(mapStateToProps, mapDispatchToProps(actions))(Confirmation);
