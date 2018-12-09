import React,{Component} from 'react';
import {option} from './line.js';
class Line extends Component{
    componentDidMount(){
        let echarts = this.props.echarts,
            line = this.refs.line,
            myChart = echarts.init(document.getElementById('line'));
        myChart.setOption(option);
        
        
    }
    render(){
        return(
            <div ref='line' id='line'>

            </div>
        )
    }
}
export default Line;