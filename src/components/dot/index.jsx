import React,{Component} from 'react';
import {option} from './index.js';
class Dot extends Component{
    componentDidMount(){
        let echarts = this.props.echarts,
            line = this.refs.dot,
            myChart = echarts.init(document.getElementById('dot'));
        myChart.setOption(option);
        
        
    }
    render(){
        return(
            <div ref='dot' id='dot'>

            </div>
        )
    }
}
export default Dot;