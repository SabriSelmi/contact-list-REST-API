import React, {Component} from 'react';
import Contact from './contact';
import axios from "axios";


class ContactList extends Component{
    constructor(props){
        super(props)
        this.state={
            contact:[]

        }
    }

    componentDidMount(){
        axios.get("/contact-list").then(res=>this.setState({
            contact:res.data
        }))
    }
    afficheAfterDelete=(x)=>{
    axios.get("/contact-list").then(res=>this.setState({
        contact:res.data
}))}
    render(){
        console.log(this.props.body)
        return(
            <div>
                <h1 style={{marginTop:"4%", color:"rgba(20,20,20,0.9)"}}>This is the con<span style={{color:"firebrick"}}>tact pa</span>ge</h1>
            <div className="row mt-5">
                {this.state.contact.map((el,i)=>
                <Contact  key={i} contactInformation={el} affiche={this.afficheAfterDelete}/>
                )}
            </div>
            </div>
        )
    }

}

export default ContactList;