import { bindActionCreators } from 'redux';
import {Map} from 'immutable';

/*
 * Bind all the functions from the `actions` and bind them with
 * `dispatch`
 */
 export default function mapDispatchToProps(actions){  
    return function (dispatch) { 
        let res = {};
        for (let action in actions) {
            res[action] = bindActionCreators(Map().merge(actions[action]).filter(value => typeof value === 'function').toObject(), dispatch);
        }
        return {
            actions: res,
            dispatch
        };
    }
}
