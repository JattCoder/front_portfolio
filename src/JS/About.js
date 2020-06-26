import React, { Component } from 'react';
import Abinfo from './Abinfo';
import LangsShow from './Langs';
import '../Styles/about.css'

class About extends Component {

  state = {
    name: '',
    description: '',
    langs: [{img: require('../Languages/ruby.svg'), name:'Ruby'},{img:require('../Languages/rails.svg'), name:'Rails'},
    {img: require('../Languages/javascript.svg'), name: 'Javascript'},{img: require('../Languages/html5.svg'), name: 'HTML'},
    {img: require('../Languages/css3.svg'), name: 'CSS'},
    {img: require('../Languages/react.svg'), name: 'React'},{img: require('../Languages/redux.svg'), name: 'Redux'},
    {img: require('../Languages/java.svg'), name: 'Java'},{img: require('../Languages/python.svg'), name: 'Python'},{img: require('../Languages/c.svg'), name: 'C'},
    {img: require('../Languages/csharp.svg'), name: 'C#'},{img: require('../Languages/cplusplus.svg'), name: 'C++'}]
  }

  componentDidMount(){
    let about = document.querySelector('.about_head');
    about.innerHTML = about.innerHTML.replace('Me', '<span style="color: red;">Me</span>');
    this.getabout()
  }

  getabout = async () => {
    let info = []
    const req = await fetch('http://localhost:2021/about')
    if(req.ok){
      info = await req.json();
      this.setState({
        name: info.name,
        description: info.description
      });
    }
  }

  render(){
    return(
      <div>
        <div style={{marginTop:300,justifyContent:'center'}}>
          <Abinfo name={this.state.name} description={this.state.description}/>
        </div>
        <nav style={{bottom:0,position:'fixed',width:'100%',display:"flex",justifyContent: "center",alignItems: "center",maxHeight:"10vh" ,minHeight: "10vh", color: "black"}}>
              {this.state.langs.map((object, i)=><LangsShow img={object} key={i} />)}
        </nav>
      </div>
    );
  }

}

export default About