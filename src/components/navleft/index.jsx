import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { navlink } from './navlink.js'
import './index.css'
class NavLeft extends Component {
    render() {
        return (
            <div className='navleft'>
                <ul>
                    {
                        navlink.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        {...item}
                                    >{item.title}</NavLink>
                                </li>
                            )
                            // if(item.exact){
                            //     return(
                            //         <li key={index}>
                            //             <NavLink
                            //             exact={item.exact}
                            //             to={item.to}
                            //             >{item.title}</NavLink>
                            //         </li>
                            //     )
                            // }
                            // return(
                            //     <li key={index}>
                            //         <NavLink
                            //         to={item.to}
                            //         >{item.title}</NavLink>
                            //     </li>
                            // )
                        })
                    }
                    {/* <li><NavLink exact to='/'>首页</NavLink></li>
                    <li><NavLink to='/line'>折线图</NavLink></li>
                    <li><NavLink to='/kline'>K线图</NavLink></li>
                    <li><NavLink to='/sunburst'>旭日图</NavLink></li>
                    <li><NavLink to='/relation'>关系图</NavLink></li>
                    <li><NavLink to='/dot'>点状图</NavLink></li>
                    <li><NavLink to='/person'>进化图</NavLink></li> */}

                </ul>
            </div>
        )
    }
}
export default NavLeft;