import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";


class UpdateContact extends Component{
    constructor(props){
        super(props)
        this.state={
            nameContact:"",
            phoneContact:"",
            emailContact:"",
            redirect:false
        }
    }

    componentDidMount(){
        axios.get("/contact-list/"+this.props.id)
            .then(res=>
                this.setState({
                    ...res.data
                })
            )
    }
    update=()=> {
        axios.put("/modify-contact/"+this.props.id, {
            nameContact:this.state.nameContact,
            phoneContact:this.state.phoneContact,
            emailContact:this.state.emailContact
        })
        this.setState({
            redirect:true
        })
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            this.state.redirect?<Redirect to="/contact-list"/>:
                <div className="card" style={{border:"1px solid black", margin:"auto", width:"40%", marginTop:"7%"}}>
                    <div className="card-header text-center"><span className="font-weight-bold"> Contact Name : </span> <input className="input-group-text" name="nameContact" value={this.state.nameContact} style={{margin:"auto"}} placeholder="Name contact" onChange={this.onChange}/></div>
                    <div className="card-header"> <span className="font-weight-bold">Contact Phone:  </span><input className="input-group-text" name="phoneContact" type="number" value={this.state.phoneContact} style={{margin:"auto"}} placeholder="Phone contact"  onChange={this.onChange}/></div>
                    <div className="card-header"> <span className="font-weight-bold">Contact E-mail:  </span><input className="input-group-text"  name="emailContact" value={this.state.emailContact} style={{margin:"auto"}} placeholder="Email contact"  onChange={this.onChange}/></div>
                    <button className="btn btn-danger bg-danger m-2 d-inline" onClick={this.update}>Update Contact</button>

                </div>
        )
    }
}

export default UpdateContact;