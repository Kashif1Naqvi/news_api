import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
class ShowData extends Component {
  constructor(props){
    super(props)
    this.state = { 
      show:false
    }
  }
  handleShow = () => {
    this.setState(prev=>({
      show : !prev.show
    }))
  }
  render() {
    const {urlToImage,title,description,author,publishedAt,content,source,url} = this.props.article
    return (
      <div>
        <a href="/dashboard" className="btn btn-danger float-right ">Back</a>
        <figure className="figure">
				  <img  src={urlToImage} data-toggle="modal" data-target="#exampleModalLong"   width="70%" height="60%" className="img-fluid  rounded"  alt="picther not found"/>
				</figure>
        <h3 className="h3 text-muted">{title}</h3>
        <div  id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					<div className="modal-dailog " role="document">
						<div className="pt-2 mt-2 model-content ">
								<div className="model-header">
									{
                    !this.state.show ? 
                      <button className="btn btn-success" onClick={this.handleShow}>Show more</button>:
											<div className="model-body m-10 " >
                        <b>Author of this is:</b><p>{author}</p>
                        <b>PublishedAt:</b><p>{publishedAt}</p>
                        <b>Contents</b> <p>{content}</p>
                        <b>Description</b>:<p>{description}</p>
                        <b>source id of </b>{title} is :<i>{source.id}</i><br/>
                        <b>source name of </b> {title} is :<i>{source.name}</i>
                        <div className="mb-sm-1 pb-10" >
                          <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-primary" >See Full Article</a>
                          <button className="btn btn-info" onClick={this.handleShow} >Show Less</button>
                        </div>
                      </div>
									}
								</div>
							</div>
						</div>
					</div>
        </div>
    )
  }
}
export default withRouter(ShowData)