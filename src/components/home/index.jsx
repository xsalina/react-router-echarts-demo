import React from 'react';
import './index.css'
class Home extends React.Component {
    componentDidMount() {
        let c = this.refs.star;
        let w = c.width = c.parentNode.offsetWidth;
        let h = c.height = c.parentNode.offsetHeight;
        let cxt = c.getContext('2d');
        let num = 200;
        let data = [];
        loop();
        function loop() {
            for( let i=0;i<num;i++ ){
                data[i] = {
                    x:Math.random()*w,
                    y:Math.random()*h,
                    cr:Math.random()*5+5
                };
                star(data[i].x,data[i].y,data[i].cr)
            }
        }

        (function draw() {
            cxt.clearRect(0,0,w,h);
            for( let i=0;i<num;i++ ){
                data[i].cr += Math.random()*2-1;
                data[i].cr = Math.min(10,data[i].cr);
                data[i].cr = Math.max(0,data[i].cr);
                star(data[i].x,data[i].y,data[i].cr);
            }
            requestAnimationFrame(draw);
        })()


        // 绘制小星星
        function star(x,y,r) {
            cxt.save();
            cxt.beginPath();
            let color = cxt.createRadialGradient(x,y,0,x,y,r);
            color.addColorStop(0,'rgba(255,255,255,0.8)');
            color.addColorStop(0.1,'rgba(255,255,255,0.8)');
            color.addColorStop(0.2,'rgba(255,255,255,0.08)');
            color.addColorStop(1,'rgba(255,255,255,0)');
            cxt.fillStyle = color;
            cxt.arc(x,y,r,0,6.3);
            cxt.fill();
            cxt.closePath();
            cxt.restore();
        }
    }
    render(){
        return(
            <div className='home'>
                <canvas ref='star' style={{display:'block',backgroundColor:'#000' }}></canvas>
            </div>
        )

    }
}
export default Home;