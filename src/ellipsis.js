import React,{Component} from 'react';
import PropTypes from 'prop-types'
import styles from './css/ellipsis.css';
class Ellipsis extends Component{
    static propTypes = {
        rows:PropTypes.number.isRequired,
        lineHeight:PropTypes.number.isRequired,
        unit:PropTypes.string
    }
    render(){
        let unit = this.props.unit?this.props.unit:'px';
        let height = this.props.rows * this.props.lineHeight + unit;
        let lineHeight = this.props.lineHeight + unit
        return (
            <div className={styles.wrap} style={{height}}>
                <p className={styles.gasket}></p>
                <p className={styles.main_content} style={{lineHeight}}>
                    {this.props.children}
                </p>
                <p className={styles.ellipsis_content} style={{height:lineHeight,lineHeight,top:'-'+lineHeight}}>...</p>
            </div>
        )
    }
}
export default Ellipsis;