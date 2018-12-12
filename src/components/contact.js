import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import axios from "axios";



class Contact extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    remove=()=>{
        axios.delete("/contact-list/"+this.props.contactInformation._id);
       
    }
    render(){

        return(

            <div className="col-sm-3 card" style={{border:"1px solid black",marginLeft:"7%", marginTop:"4%"}}>
                <div className="card-header"><span className="font-weight-bold"> Contact Name : </span>{this.props.contactInformation.nameContact}</div>
                <div className="card-header"> <span className="font-weight-bold">Contact Phone:  </span>{this.props.contactInformation.phoneContact}</div>
                <div className="card-header"> <span className="font-weight-bold">Contact E-mail:  </span>{this.props.contactInformation.emailContact}</div>
                <NavLink to={`/modify-contact/${this.props.contactInformation._id}`}> <button className="btn btn-danger bg-danger m-2 d-inline"> Update Contact</button></NavLink>
                <NavLink to={`/contact-list/${this.props.contactInformation._id}`}><button className="btn btn-danger bg-danger m-2 d-inline" onClick={this.remove}>Remove Contact</button></NavLink>
            </div>
        )
    }
}

export default Contact;