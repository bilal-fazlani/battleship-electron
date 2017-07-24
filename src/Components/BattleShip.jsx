import * as React from "react";
import Header from "./Header";
import Row from "./Row";

export default class BattleShip extends React.Component{

    render(){
        const rows = [...Array(this.props.rows).keys()];
        const columns = [...Array(this.props.columns).keys()];

        return <div>
            <table>
                <Header columns={columns} />
                {rows.map(row=> <Row columns={columns} row={row}/>)}
            </table>
        </div>
    }
}


BattleShip.propTypes = {
    rows : React.PropTypes.number.isRequired,
    columns : React.PropTypes.number.isRequired
};