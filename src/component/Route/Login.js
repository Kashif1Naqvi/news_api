import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      error:""
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      email:this.state.email,
      password:this.state.password
    }
    let res  = await fetch('https://reqres.in/api/login',{
                method:'POST',
                headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
    })
    let data =await res.json()
      if(res.status === 200){
        localStorage.setItem('token',JSON.stringify(data.token))
        this.props.history.push('/dashboard')
      }else{
        this.setState({
          error : data.error
        })
      }
    }
  render() {
    console.log(this.state.error)
    return (
      <div className="container bg-lighter" style={{height:"800px",width:"1000px",margin:"40px"}}  >
        <div style={{marginTop:"10%",padding:"10%"}} >
          <h1 className="h1 text-center text-muted text-dark" >Sign in </h1>
          <form  onSubmit={this.handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" onChange={this.handleChange} name="email" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" onChange={this.handleChange} name="password" className="form-control"/>
            </div>
              {this.state.error ?  <p className="alert alert-danger ">{this.state.error}</p> :"" }
              <input type="submit" className="btn btn-primary" value="login" />    
          </form>    
          </div>
      </div>
    )
  }
}

export default withRouter(Login)