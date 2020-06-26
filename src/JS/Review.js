import React, { Component } from 'react'
import Input from './review_input'

export default class Review extends Component{

    state = {
        colors: [{id:1,color:'#FB0303'},{id:2,color:'#FB3F03'},{id:3,color:'#FB7303'},{id:4,color:'#FBAF03'},
            {id:5,color:'#FBCA03'},{id:6,color:'#FBEB03'},{id:7,color:'#D2FB03'},{id:8,color:'#A2FB03'},{id:9,color:'#5EFB03'},
            {id:10,color:'#03FB14'},{id:11,color:'#03FB94'},{id:12,color:'#03FBE3'},{id:13,color:'#03D0FB'},{id:14,color:'#037AFB'},
            {id:15,color:'#0341FB'},{id:16,color:'#4803FB'},{id:17,color:'#8003FB'},{id:18,color:'#B103FB'},{id:19,color:'#FB03D1'},
            {id:20,color:'#FB0373'}]
    }

    render(){
        return (
            <div id='outsidediv' style={{marginTop:200}}>
                <Input colors={this.state.colors}/>
            </div>
        )
    }
}