import React,{Component} from 'react';
import option1 from './index.js';
class SunBurst extends Component{
    componentDidMount(){
        let echarts = this.props.echarts,
            sunburst = this.refs.sunburst,
            myChart = echarts.init(document.getElementById('sunburst'));
        myChart.setOption(option1);
    }
    render(){
        return(
            <div ref='sunburst' id='sunburst'></div>
        )
    }
}
export default SunBurst;