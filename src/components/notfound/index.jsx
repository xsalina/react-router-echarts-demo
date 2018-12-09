import React,{Component} from 'react';
import './index.css'
class Notfound extends Component{
    render(){
        return(
            <div className='notfound'>
                <img src={require('./404.png')} alt="炸不到页面"/>
            </div>
        )
    }
}
export default Notfound;