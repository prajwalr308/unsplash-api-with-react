import React, { Component } from 'react'
// import Slider from "./components/slider/Slider";
import './App.css';
import load from './images/Daco_5706067.png'

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      images: [],
      click:false,
     
    }
    this.handleClick = this.handleClick.bind(this);
    this.loadImages = this.loadImages.bind(this);
   
  }

 async loadImages(){
    const url = `https://api.unsplash.com/photos/?client_id=wDf31SIzomRcc1rGDDZ_s7p6icTHqhywSq9Iq95DU2k`;
    const response= await fetch(url);
  
    const data= await response.json();
    
    this.setState({   images: data,loading:false})
    console.log(data);
  }
  handleClick(e) {  
    e.preventDefault()
    const link = e.target.src;
    console.log(link);
    window.open(`${link}`, "_blank")
 
    

   }

  render() {
   
    const {images}=this.state;

  return (
      <div>
        
           
         <div   >
         <img src={load} onClick={this.loadImages} className="load" />
         <div></div>
         <div className="images">{ images.map(image=>(
    <img src={image.urls.small} onClick={this.handleClick} />
       )

       )}</div>
         </div>
        
        
       
    
        
      </div>
    )
  }
}

export default App

