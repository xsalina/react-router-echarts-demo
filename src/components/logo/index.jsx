import React,{Component} from 'react';
class Logo extends Component {
    render(){
        return(
            <div>
                <img src={require('./logo.png')} width='240' alt="logo"/>
            </div>
        )
    }
}
export default Logo;