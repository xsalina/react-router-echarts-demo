import Home from '../components/home/index.jsx';
import Line from '../components/line/index.jsx';
import KLine from '../components/kline/index.jsx';
import SunBurst from '../components/sunburst/index.jsx';
import Relation from '../components/relation/index.jsx';
import Dot from '../components/dot/index.jsx';
import Person from '../components/person/index.jsx';
import Notfound from '../components/notfound/index.jsx';
export const routers = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/line',
        component:Line
    },
    {
        path:'/kline',
        component:KLine
    },
    {
        path:'/sunburst',
        component:SunBurst
    },
    {
        path:'/relation',
        component:Relation
    },
    {
        path:'/dot',
        component:Dot
    },
    {
        path:'/person',
        component:Person
    },
    {
        path:'*',
        conponent:Notfound
    }
]