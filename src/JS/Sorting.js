import React, { Component } from 'react';
import '../Styles/sorting.css'

export default class Sorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Bubble Sort', 
      count: 20,
      colors: [{id:1,color:'#FB0303'},{id:2,color:'#FB3F03'},{id:3,color:'#FB7303'},{id:4,color:'#FBAF03'},
      {id:5,color:'#FBCA03'},{id:6,color:'#FBEB03'},{id:7,color:'#D2FB03'},{id:8,color:'#A2FB03'},{id:9,color:'#5EFB03'},
      {id:10,color:'#03FB14'},{id:11,color:'#03FB94'},{id:12,color:'#03FBE3'},{id:13,color:'#03D0FB'},{id:14,color:'#037AFB'},
      {id:15,color:'#0341FB'},{id:16,color:'#4803FB'},{id:17,color:'#8003FB'},{id:18,color:'#B103FB'},{id:19,color:'#FB03D1'},
      {id:20,color:'#FB0373'}],
      selColors: [],
      boxes: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.draw();
  }

  handleChange(event) {
    if(event.target.id === 'select') {
      this.setState({value: event.target.value}) 
    } 
    if(event.target.id === 'range') { 
      this.setState({count: parseInt(event.target.value)});
      this.draw();
    }
  }

  handleSubmit(event) {
    this.play();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <div className='sort-page'>
            <div className='rangebar'>
              <input type="range" id="range" onChange={this.handleChange} min='7' max='20'></input>
            </div>
            <div style={{display: 'flex'}}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Sorting Type
                  <select id='select' className='dropdown' value={this.state.value} onChange={this.handleChange}>
                    <option value="Bubble Sort">Bubble Sort</option>
                    <option value="Selection Sort">Selection Sort</option>
                    <option value="Color Sort">Color Sort</option>
                  </select>
                </label>
                <button className='btn btn-sm follor btn-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className='before'>
          <div className='drawlayout' id="drawlayout"></div>
        </div>
      </div>
    );
  }

  events = () => {
    this.changeeffects();
    this.draw();
  }

  draw(){
    let width = 40;
    let margin = 5;
    let parent = document.getElementById('drawlayout');
    let boxes = []
    let colors = []
    while(parent.hasChildNodes()){
      parent.removeChild(parent.lastChild);
    }
    for(let i = 0 ; i < this.state.count; i++){
      let randomNum = Math.floor((Math.random() * this.state.count) + 1);
      let randomColor = this.state.colors[randomNum-1].color;
      let box = document.createElement("button");
      box.id = i;
      box.style.width = `${width}px`;
      box.style.height = `${(randomNum*7) + 180}px`;
      box.style.backgroundColor = `${randomColor}`
      box.style.marginLeft = `${margin}px`
      box.style.marginRight = `${margin}px`
      box.style.borderColor = 'transparent'
      parent.append(box); 
      boxes.push(box);
      colors.push({id:i,color:randomColor});
    }
    this.setState({boxes: boxes,selColors: colors});
  }

  play(){
    let parent = document.getElementById('drawlayout');
    let boxes = [];
    for(let box = 0; box < parent.childNodes.length; box++){
      boxes.push(parent.childNodes[box]);
    }
    for(let i = 0; i < boxes.length; i++){
      for(let p = 0; p < boxes.length; p++){
        if(this.state.value === 'Bubble Sort'){
          if((p+1) < boxes.length){
            let check = this.bubbly(boxes[p],boxes[p+1])
            if(!check){
              let backup = boxes[p];
              boxes[p] = boxes[p+1];
              boxes[p+1] = backup;
              setTimeout(function(){
                let fin = '';
                let height1 = parent.childNodes[p].style.height;
                let height2 = parent.childNodes[p+1].style.height;
                while(fin !== 'done'){
                  if(parent.childNodes[p+1].style.height === height1){
                    parent.childNodes[p+1].style.height = height1;
                    parent.childNodes[p].style.height = height2;
                    fin = 'done';
                  }else{
                    parent.childNodes[p+1].style.height = parseInt(parent.childNodes[p+1].style.height)+1+'px';
                    parent.childNodes[p].style.height = parseInt(parent.childNodes[p].style.height)-1+'px';
                  }
                }
              },50)
            }
          }
        }else if(this.state.value === 'Selection Sort'){
          if((p+1) < boxes.length){
            let check = this.bubbly(boxes[p],boxes[p+1])
            if(!check){
              let backup = boxes[p];
              boxes[p] = boxes[p+1];
              boxes[p+1] = backup;
              setTimeout(function(){
                let fin = '';
                let height1 = parent.childNodes[p].style.height;
                let height2 = parent.childNodes[p+1].style.height;
                while(fin !== 'done'){
                  if(parent.childNodes[p+1].style.height === height1){
                    parent.childNodes[p+1].style.height = height1;
                    parent.childNodes[p].style.height = height2;
                    fin = 'done';
                  }else{
                    parent.childNodes[p+1].style.height = parseInt(parent.childNodes[p+1].style.height)+1+'px';
                    parent.childNodes[p].style.height = parseInt(parent.childNodes[p].style.height)-1+'px';
                  }
                }
              },50)
            }
          }
        }else if(this.state.value === 'Color Sort'){
          if((p+1) < boxes.length){
            let check = this.colory(boxes[p],boxes[p+1])
            if(!check){
              let backup = boxes[p];
              boxes[p] = boxes[p+1];
              boxes[p+1] = backup;
              setTimeout(function(){
                let color1 = parent.childNodes[p].style.backgroundColor;
                let color2 = parent.childNodes[p+1].style.backgroundColor;
                parent.childNodes[p+1].style.backgroundColor = color1;
                parent.childNodes[p].style.backgroundColor = color2;
              },50)
            }
          }
        }
      }
    }
    this.setState({boxes: boxes});
  }

  setIn(parent,boxes,p){
    let backupChild = boxes[p+1];
    parent.replaceChild(boxes[p],boxes[p+1])
    parent.replaceChild(boxes[p+1],boxes[p])
    boxes[p+1] = boxes[p];
    boxes[p] = backupChild;
    return boxes
  }

  bubbly(a,b){
    if(parseInt(a.style.height) <= parseInt(b.style.height)) { return true }
    return false
  }

  colory(a,b){
    let aindex = 0;
    let bindex = 0;
    let count = 0;
    let acolor = this.state.selColors[a.id].color;
    let bcolor = this.state.selColors[b.id].color;
    for(let i = 0; i < this.state.colors.length; i++){
      if(acolor === this.state.colors[i].color){
        aindex = i;
        count += 1;
      }else if(bcolor === this.state.colors[i].color){
        bindex = i;
        count += 1;
      }
      if(count === 2){
        if(bindex < aindex) return false;
        else return true
      }
    }
  }

  changeeffects = () =>{
    let top_nav = document.getElementById('top_nav')
    let bottom_nav = document.getElementById('bottom_nav')
    top_nav.style.MozBoxShadow = '';
    top_nav.style.WebkitBoxShadow = '';
    top_nav.style.boxShadow = '';
    bottom_nav.style.MozBoxShadow = '';
    bottom_nav.style.WebkitBoxShadow = '';
    bottom_nav.style.boxShadow = '';
  }
}