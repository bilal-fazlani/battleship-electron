import React from "react";
import styles from './Cell.css';

export default class Cell extends React.Component{

    render(){
        return <div className={styles.cell}>
            {/*<span>X: {this.props.x}</span>*/}
            {/*&nbsp;&nbsp;*/}
            {/*<span>Y: {this.props.y}</span>*/}
        </div>;
    }
}

Cell.propTypes = {
    x : React.PropTypes.number.isRequired,
    y : React.PropTypes.number.isRequired,
    hasShip : React.PropTypes.bool.isRequired,
    isShot : React.PropTypes.bool.isRequired,
    isHit : React.PropTypes.bool.isRequired
};