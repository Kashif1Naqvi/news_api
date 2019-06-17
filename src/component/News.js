import React,{Component} from 'react'
import NewsList from './NewsList'
class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            news:[],
        }
    }
    componentDidMount(){
        const url = `https://newsapi.org/v2/${this.props.title}?${this.props.query}&apiKey=c0d8aaed92ed4f2386d3d1e698b17284`
        fetch(url,{
            body:JSON.stringify()
        })
            .then(res=>res.json())
            .then(data=>{ this.setState({ news:data.articles }) } )
    }
    render(){
        const newsList  = this.state.news.map((news,index)=>{
            return( <NewsList key={index}   news={news}   /> ) 
                })
        return(
            
                <div className="row">
                    {newsList}
                </div>
        )
    }
}
export default News