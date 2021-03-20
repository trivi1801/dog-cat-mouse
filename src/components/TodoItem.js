/*import React, { Component } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import './TodoItem.css';
import checkMark from './img/check-mark.svg';
import checked from './img/checked.svg';

class TodoItem extends Component {
   
    render() {
        const {item, onClick} = this.props;
        let url = checkMark;
        if (item.isComplete) {
            url = checked;
        }
       
        return(
            <div  className={classNames('TodoItem',{
                'TodoItem-complete': item.isComplete
            })}>
                <img onClick={onClick} src = {url} width={32} />
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}
TodoItem.propTypes = {
    item: propTypes.shape({
        isComplete: propTypes.bool.isRequired,
        title: propTypes.string.isRequired
    }),
    onClick: propTypes.func.isRequired
}

export default TodoItem;*/