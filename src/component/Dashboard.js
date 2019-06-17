import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import News from './News'
import {withRouter} from 'react-router-dom'

class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      data1:{
        title:"top-headlines",
        query:"q=trump"
    },
    data2:{
        title:'top-headlines',
        query:'country=de&category=business'
    },
    data3:{
      title:"everything",
      query:"q=bitcoin"
    },
    show:false
    }
  }
  
  showNews=()=>{
    this.setState(prev=>({
      show: !prev.show
    }))
  }

  logout = () => {
    localStorage.clear()
    this.props.history.push('/')
  }
  render(){
  return(
    <div className="container">
      <header className="text-center text-dark  bg-grey ">
        <b className="text-muted" >News Feeds</b>
      </header>
      <button className="btn btn-primary float-right" onClick={this.logout} >Logout</button><br/><br/>
      <section className="row" >
         <News {...this.state.data1}  />
         {
           this.state.show ? 
                    (
                      <div>
                            <News {...this.state.data2} />
                            <News {...this.state.data3} />
                            <div className="row">
                              <div className="col text-center">
                                <button  className="btn btn-primary"  onClick={this.showNews}>Show Less</button>      
                              </div>
                            </div>
                      </div> 
                    ):(
                      <div className="col text-center">
                            <button  className="btn btn-primary"  onClick={this.showNews}>Show More</button>      
                        </div>
                    )
         }
      </section>
    </div>
    )
}}

export default withRouter(Dashboard);
