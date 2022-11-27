import React,{Component} from 'react'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Experience from '../Experience/Experience'
import Contacts from '../Contacts/Contacts'

export default class UserCV extends Component{
    render(){
        return(
            <>
            <h1>CV</h1>
            <PersonalInfo/>
            <Experience/>
            <Contacts/>
            </>
        )
    }
}
