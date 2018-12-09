import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Layout from './components/layout/index.jsx';
import Home from './components/home/index.jsx';
import Line from './components/line/index.jsx';
import KLine from './components/kline/index.jsx';
import SunBurst from './components/sunburst/index.jsx';
import Relation from './components/relation/index.jsx';
import Dot from './components/dot/index.jsx';
import Person from './components/person/index.jsx';
import Notfound from './components/notfound/index.jsx';
import echarts from 'echarts';
import {routers} from './router/index.js';
class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
              <Route path='/' render={()=>{
                  return(
                    <Layout >
                        <Switch>
                            {
                                routers.map((item,index)=>{
                                    if(item.exact){
                                        return(
                                            <Route 
                                            key={index} 
                                            exact={item.exact}
                                            path={item.path}
                                            component={item.component}
                                            ></Route>
                                        )
                                    }
                                    return(
                                        <Route
                                        key={index}
                                        path={item.path}
                                        render={()=>{
                                        return <item.component echarts={echarts}></item.component>
                                    }}></Route>
                                    )
                                })
                            }
                            {/* <Route exact path='/' component={Home}></Route>
                            <Route  path='/line'
                                render={()=>{
                                    return <Line echarts={echarts}></Line>
                            }}></Route>
                            <Route path='/kline'
                                render={()=>{
                                    return <KLine echarts={echarts}></KLine>
                                }}
                            ></Route>
                            <Route path='/sunburst'
                                render={()=>{
                                    return <SunBurst echarts={echarts}></SunBurst>
                                }}
                            ></Route>
                            <Route path='/relation'
                                render={()=>{
                                    return <Relation echarts={echarts}></Relation>
                                }}
                            ></Route>
                            <Route path='/dot'
                                render={()=>{
                                    return <Dot echarts={echarts}></Dot>
                                }}
                            ></Route>
                            <Route path='/person'
                                render={()=>{
                                    return <Person echarts={echarts}></Person>
                                }}
                            ></Route>

                            <Route component={Notfound}></Route> */}
                        </Switch>
                    </Layout>
                  )
              }}></Route>
          </Switch>          
      </Router>
    );
  }
}

export default App;
