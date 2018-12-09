import React,{Component} from 'react';
import options from './index.js';
class Person extends Component{
    componentDidMount(){
        let echarts = this.props.echarts,
            relation = this.refs.person,
            myChart = echarts.init(document.getElementById('person'));
        myChart.setOption(options);
    }
    render(){
        return(
            <div ref='person' id='person'></div>
        )
    }
}
export default Person;