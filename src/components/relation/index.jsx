import React,{Component} from 'react';
import options from './relations.js';
class Relation extends Component{
    componentDidMount(){
        let echarts = this.props.echarts,
            relation = this.refs.relation,
            myChart = echarts.init(document.getElementById('relation'));
        myChart.setOption(options);
    }
    render(){
        return(
            <div ref='relation' id='relation'></div>
        )
    }
}
export default Relation;