import React from "react";
import Cell from "./Cell";
import stlyes from './Row.css'

export default class Header extends React.Component {

    render(){
        return <tr>
            <td className={stlyes.headerCell}>{this.props.row+1}</td>
            {this.props.columns.map(column => <td>
                <Cell x={this.props.row} y={column} hasShip={false} isShot={false} isHit={false}/>
            </td>)}
        </tr>;
    }
}

Header.propTypes = {
    columns : React.PropTypes.array.isRequired,
    row: React.PropTypes.number.isRequired
};