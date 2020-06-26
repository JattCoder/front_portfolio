import React, { Component } from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import Like from './Like';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gethome } from '../actions/gethome'

class Nav extends Component {
  state = {
    linkedin: "",
    github: "",
    email: "",
    likes: 0
  }

  componentDidMount(){
    this.props.gethome();
  }

    render(){
      let likes = this.props.data;
      return(
        <div>
          <div>
            {this.state.likes ? (
              <div>
                <h1>Loading...</h1>
              </div>
            ):(
              <div>
                <TopNav/>
                <Like like={likes.likes}/>
                <BottomNav linkedin={likes.linkedin} github={likes.github} email={likes.email}/>
              </div>
            )}
          </div>
        </div>
      );
    }
}

function mapStateToProps (state){
  return {
    data: state.gethome
  }
}
function mapDispatchToProps(dispatch){
  return {
    gethome: bindActionCreators(gethome,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);