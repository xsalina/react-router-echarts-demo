import React from 'react';
import './index.css'

import Logo from '../logo/index.jsx'
import NavLeft from '../navleft/index.jsx'
import NavTop from '../navtop/index.jsx'
class Layout extends React.Component {
    render(){
        return(
            <div id='main'>
                <div className='side'>
                    <div className='logo'>
                        <Logo></Logo>
                    </div>
                <NavLeft></NavLeft>             
                </div>
                <div className='con'>
                    <NavTop></NavTop>
                    <div className='navCon'>
                    {this.props.children} 
                    </div>
                </div>
                
            </div>
        );

    }
}
export default Layout