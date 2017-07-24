import React from "react";
import styles from './Header.css'

export default class Header extends React.Component {
    render(){
        return <tr>
            <td></td>
            {this.props.columns.map(column=> <td className={styles.headerCell}>
                {column +1}
            </td>)}
        </tr>
    }
}

Header.propTypes = {
    columns: React.PropTypes.array.isRequired
};