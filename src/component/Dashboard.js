import React,{Component} from 'react';
import News from './News'
import {withRouter,Route,Link,BrowserRouter as Router} from 'react-router-dom'
class Dashboard extends Component{
  constructor(props){
    super(props)
    this.state = {
      news1:{
        title:"top-headlines",
        query:"q=trump"
      },
      news2:{
        title:'top-headlines',
        query:'country=de&category=business'
      },
      news3:{
        title:"everything",
        query:"q=bitcoin"
      },
      news4:{
        title:"everything",
        query:"q=apple&from=2019-06-17&to=2019-06-17&sortBy=popularity"
      },
      news5:{
        title:"top-headlines",
        query:"country=us"
      },
      news6:{
        title:"top-headlines",
        query:"country=de&category=business",
      },
      show:false,
    }
  }

  logout = () => {
    localStorage.clear()
    this.props.history.push('/')
  }
  render(){
    return(
      <div className="container bg-light ">
        <div className="container bg-light ">
        <header className="text-center text-dark  bg-grey ">
          <b className="text-muted" >News Feeds</b>
        </header>
        <button className="btn btn-primary float-right" onClick={this.logout} >Logout</button><br/><br/>
        <Router>
          <div className="row">
            <div className="col col-sm-10 col-md-10 col-xl-10 col-lg-10">
              <Route exact path={`${this.props.location.pathname}`}  render={()=><News {...this.state.news1} />}  />
              <Route  path={`${this.props.location.pathname}/business`}  render={()=><News {...this.state.news2} />} />
              <Route  path={`${this.props.location.pathname}/bitcoin`}  render={()=><News {...this.state.news3} />} />
              <Route  path={`${this.props.location.pathname}/apple`}  render={()=><News {...this.state.news4} />} />
              <Route  path={`${this.props.location.pathname}/country`} render={()=><News {...this.state.news5} />} />
              <Route  path={`${this.props.location.pathname}/germany`} render={()=><News {...this.state.news6} />} />
            </div>
            <div className="col col-md-2 col-xl-2 col-lg-2 col-sm-2">
              <Link className="list-item nav-link"  to={`${this.props.location.pathname}`} >Trump</Link>
              <Link className="list-item nav-link"  to={`${this.props.location.pathname}/business`} >Business</Link>
              <Link className="list-item nav-link"  to={`${this.props.location.pathname}/bitcoin`} >Bitcoin</Link>
              <Link className="list-item nav-link"  to={`${this.props.location.pathname}/apple`} >Apple news</Link>
              <Link className="list-item nav-link" to={`${this.props.location.pathname}/country`}>USA Country</Link>
              <Link className="list-item nav-link" to={`${this.props.location.pathname}/germany`} > headlines from Germany</Link>
            </div>
          </div>
        </Router>
      </div> 
      </div>
    )
  }
}

export default withRouter(Dashboard);

