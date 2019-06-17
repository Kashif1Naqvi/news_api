import React,{Component} from 'react'
class NewsList extends  Component{
    constructor(props){
        super(props)
        this.state = { show:false }
        this.handleShow = this.handleShow.bind(this)
    }
    
    handleShow(){
        this.setState(res=>({
            show: !res.show
        }))
    }
    
    render(){
        const {source,author,title,description,url,urlToImage,publishedAt,content} = this.props.news
        return(
            <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4">
                <button type="button" className="btn btn-primary"  data-toggle="modal" data-target="#exampleModalLong" onClick={this.handleShow}  >Display News</button>
                <div className={this.state.show ? "":"model fade"} id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dailog" role="document" >
                        <div className="model-content">
                            <div className="model-header">
                                <h5 className="model-title" id="exampleModalLongTitle">{title}</h5>
                                <figure className="figure">
                                    <img src={urlToImage}  width="70%" height="60%" className="img-fluid  rounded"  alt="Data not found"/>
                                </figure>
                                {
                                    this.state.show ? (
                                        <div className="model-body" >
                                            <div className="content">{description}</div>
                                            <b>Author of this is: {author}</b>
                                            <b>PublishedAt:{publishedAt}</b>
                                            <b>{content}</b>
                                            <b>You check the source from <i>{source.name}</i></b><br/>
                                            <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-primary" >See Full Article</a>
                                            <button className="btn btn-primary" onClick={this.handleShow}>Show Less</button>
                                        </div>
                                    ):""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            )
    }
}
export default NewsList

{/* <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4" >   
                <figure className="figure">
                    <img src={urlToImage}  width="70%" height="60%" className="img-fluid  rounded"  alt="Data not found"/>
                </figure>
                <section className="content">
                    <div className="h4">{title}</div>
                    {
                        this.state.show ? (
                                    <div>
                                        <div className="content">{description}</div>
                                        <b>Author of this is: {author}</b>
                                        <b>PublishedAt:{publishedAt}</b>
                                        <b>{content}</b>
                                        <b>You check the source from <i>{source.name}</i></b><br/>
                                        <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-primary" >See Full Article</a>
                                        <button className="btn btn-primary" onClick={this.handleShow}>Show Less</button>
                                    </div>
                                    ):
                                    (<button className="btn btn-primary" onClick={this.handleShow}>Show more</button>)
                    }
                </section>
            </div> */}
