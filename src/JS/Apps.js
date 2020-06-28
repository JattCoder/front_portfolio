import React, { Component } from 'react';
import '../Styles/apps.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import SimpleImageSlider from "react-simple-image-slider";

export default class Apps extends Component {
  state={
    apps: [],
    selection: 0,
    reload: true,
    imgs: [[{url: require('../AppImgs/App1/1.PNG')}, {url: require('../AppImgs/App1/2.PNG')},{url: require('../AppImgs/App1/3.PNG')}, {url: require('../AppImgs/App1/4.PNG')}],
    [{url: require('../AppImgs/App2/1.PNG')}, {url: require('../AppImgs/App2/2.PNG')},{url: require('../AppImgs/App2/3.PNG')}, {url: require('../AppImgs/App2/4.PNG')}],
    [{url: require('../AppImgs/App3/1.jpg')}],
    [{url: require('../AppImgs/App4/1.PNG')}, {url: require('../AppImgs/App4/2.PNG')},{url: require('../AppImgs/App4/3.PNG')}, {url: require('../AppImgs/App4/4.PNG')}],
    [{url: require('../AppImgs/App5/1.PNG')}, {url: require('../AppImgs/App5/2.PNG')},{url: require('../AppImgs/App5/3.PNG')}, {url: require('../AppImgs/App5/4.PNG')}]]
  }

  settings = {
    dots: true,
    infinity: true,
    speed: 500,
    arrows: true,
    rows:1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesPerRow: 4,
    variableWidth: true,
    responsive: [{
        breakpoint: 480,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }]
  };

  getapps = async () => {
    let info = [];
    const req = await fetch('https://harmandeep-mand-portfolio.herokuapp.com/apps');
    if(req.ok){
      info = await req.json();
      this.setState({
        apps: info
      });
    }
  }

  componentDidMount(){
    this.getapps();
  }
 
  render(){
    const {apps, imgs}=this.state;
    if (!apps || !imgs) return null;
    return(
        <div height={'100%'}>
          <div className="container">
          {this.state.apps.length === 0 ? (
            <div className='spinner-border' role='status'>
              <span className='sr-only' >Loading...</span>
            </div>
          ):(
            <Slider {...this.settings}>  
            {this.state.apps.length > 0 && this.state.apps.map((current,index)=>(
            <div className='out' key={current.id}>
              <div className='card'>
                <div className='row'>
                  <div className='img'><SimpleImageSlider
                    width={250}
                    height={160}
                    images={this.state.imgs[index]}
                    showBullets={false}
                  /></div>
                </div>
                <h5 className='card-title'>{current.name}</h5>
                <div className='info'>
                    {current.description}
                  </div>
                <div className='card_btns'>
                  <small className='card-text text-sm-center text-muted'></small>
                  <br/>
                  <button className='btn btn-sm follor btn-primary' onClick={()=>{window.open(current.source)}}>Source</button>
                  <button className='btn_live' onClick={()=>{window.open(current.live)}}>Live</button>
                </div>
              </div>
            </div>
            ))}
            </Slider>
          )}
          </div>
        </div>
    );
  }
}