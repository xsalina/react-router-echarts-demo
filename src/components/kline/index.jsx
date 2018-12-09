import React,{Component} from 'react';
import{option} from './kline.js';
class kLine extends Component{
    componentDidMount(){
        let echarts = this.props.echarts,
             kline = this.refs.kline,
             myChart = echarts.init(document.getElementById('kline'));
        myChart.setOption(option);
    }
    render(){
        return(
            <div ref='kline' id='kline'></div>
        )
    }
}
export default kLine;