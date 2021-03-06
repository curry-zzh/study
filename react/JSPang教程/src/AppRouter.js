import React from 'react';
import { BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'

import './index.css'


function Approuter(){
    let routerConfig = [
        {path:'/',title:'博客首页',exact:true,component:Index},
        {path:'/video',title:'视频教程',exact:false,component:Video},
        {path:'/workplace',title:'职场技能',exact:false,component:Workplace},
    ]
    // let Config = []
    return (
        <Router>
            <div className = 'mainDiv'>
                <div className = 'leftNav'>
                    <h3>一级导航</h3>
                    <ul>
                       {

                           routerConfig.map((item,index)=>{
                               if(item.title === '职场技能'){
                               return(
                               <li key={index}>  
                               <Link to ={item.path}>
                                <div style={{'color':'red'}}>{item.title}</div>
                                   </Link>
                               </li>
                               )}
                               if(item.title === '视频教程'){
                                return(
                                <li key={index}>  
                                <Link to ={item.path}>{item.title}</Link>
                                </li>
                                )}
                               else return ''
                           })
                       }
                    </ul>
                </div>
                <div className="rightMain">
               { 
               routerConfig.map((item,index)=>{
                return(
                <Route 
                key={index} path={item.path} exact={item.exact} 
                component={item.component} 
                />
                )})       
                }
                </div>
            </div>

        </Router>
    )
}
export default Approuter