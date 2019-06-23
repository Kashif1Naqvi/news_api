import React,{Component} from 'react'
import {withRouter,Link ,BrowserRouter as R } from 'react-router-dom'
class NewsList extends  Component{
	constructor(props){
		super(props)
		this.state = { show:false }
	}
	
	handleShow = (news) =>{
		this.setState(res=>({
			show: !res.show
		}))
		// CALL PARENT FUNCTION
		this.props.article(news)
	}
	
	render(){
		const {urlToImage} = this.props.news
		return(
			<R>
			<div className="col-sm-4 col-md-4 col-xl-4 col-lg-4">
				<figure className="figure">
					<Link to={`${this.props.location.pathname}`}>
						<img  src={urlToImage} onClick={() =>this.handleShow(this.props.news)}  data-toggle="modal" data-target="#exampleModalLong"   width="70%" height="60%" className="img-fluid  rounded"  alt="Data not found"/>
					</Link>
				</figure>
				</div>        
			</R>
		)
	}
}
export default withRouter(NewsList)