/**
 * Created by ksb on 17. 1. 29.
 */
import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class SiderBar extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const mapToComponent = ()=>{
            if(this.props.iconName == ''){
                return (<span>{this.props.name}</span>);
            } else {
                return (<i className={this.props.iconName}></i>);
            }
        };

        return (
            <div className="menu-item" >
                {mapToComponent()}
            </div>
        )
    }
}

SiderBar.defaultProps = {
    iconName : '',
    name : ''

};

SiderBar.propTypes = {
    iconName : PropTypes.string,
    name : PropTypes.string
};


