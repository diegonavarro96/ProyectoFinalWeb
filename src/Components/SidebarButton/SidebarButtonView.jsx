import React,{Component} from 'react';
import './style.css'
//iconfinder.com



class SidebarButtonView extends Component{
        render (){
            const{icon,label}= this.props;
            return(
                <div className ="Sidebar-button">
                    
                    <img className="icon-img" src = { icon } alt={label}/>
                    <p classNamec= "option">{label}</p>
                </div>
            );
        }
    }

export default SidebarButtonView;