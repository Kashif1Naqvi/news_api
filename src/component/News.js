import React,{Component} from 'react'
import NewsList from './NewsList'
import ShowData from './ShowData'
class News extends Component{
	constructor(props){
		super(props)
			this.state = {
				news:[],
				show:false,
				articleList:{}
			}
	}
	async componentDidMount(){
		const url =await fetch(`https://newsapi.org/v2/${this.props.title}?${this.props.query}&apiKey=c0d8aaed92ed4f2386d3d1e698b17284`)
		const data =await url.json()
		this.setState({ news:data.articles,show:true})
		setTimeout(() => {
			this.setState({
				show:false
			})
		},2000)	
	}
	NewsArticle = (news) => {
		this.setState({
			articleList:news
		})
	}
	render(){
		const newsList  = this.state.news.map((news,index)=><NewsList key={index}  news={news} article={(news)=>this.NewsArticle(news)}  />)
		return( 
			 <div className="row">
			{
			(Object.keys(this.state.articleList).length > 0 ) ?  <ShowData article={this.state.articleList} />
			:this.state.show ? 
          	<div className="d-flex justify-content-center" style={{marginBottom:"210px" ,marginLeft:"210px" ,padding:"250px",}} >
            <div className="spinner-border spinner-border-sm" style={{padding:"50px"}} role="status">
              <span className="sr-only">{newsList}</span>
            </div>
					</div>:newsList	}
			</div>
		)
	}
}
export default News