import React, {Component} from 'react'
import "./SortingAlgorithm.css"
import * as sortingMethods from './sortMethods.js'

class SortingAlgorithm extends Component{
  constructor(props){
    super(props);
    this.correctColor = '#33cc33'; //Green
    this.compareColor = '#ffffcc'; //Yellow
    this.notSortedColor = '#74A9FF'; //Blue
    this.size = 100;
    this.animation_speed = 1;
    this.state = {array:[]}
  }
  componentDidMount(){
    this.newArray();
  }
  newArray(){
    const array = []
    const vallines = document.getElementsByClassName("val-line");
    for (let x = 0;x<this.size;x++){
      var num = randomNumberGenIntervalBetw(10,900)
      array.push(num);
    }
    for (let y = 0;y<vallines.length;y++){
      const indxStyle = vallines[y].style;
      indxStyle.backgroundColor = this.notSortedColor;
    }
    this.setState({array});
  }
  insertionSort(){
    //const array = sortingMethods.insertionSort(this.state.array);
    const animations = sortingMethods.insertionSortAnimated(this.state.array);
    for (var x = 0;x<animations.length;x++){
      const vallines = document.getElementsByClassName("val-line");
      const [changeColor, indx, w] = animations[x];
      const indxStyle = vallines[indx].style;
      if (changeColor===0){
        setTimeout(() => {
        indxStyle.backgroundColor = this.correctColor;
        indxStyle.width = `${w/10}%`
      }, x * this.animation_speed);
      }
      else{
        setTimeout(() => {
          indxStyle.backgroundColor = this.compareColor;
        indxStyle.width = `${w/10}%`
      }, x * this.animation_speed);
      }
    }
    //this.setState({array});
  }
  render(){
    const {array} = this.state;
    return(
      <div className="body-container">
        <br/>
        <div className="header-container">
        
        <button type="button" className="gen-button" onClick={() => this.newArray()}>
          Create New Array
        </button>
        <button type="button" className="ins-button" onClick ={() => this.insertionSort()}>
          Insertion Sort
        </button>
        </div>
        <br></br>
        <br></br>
        <div className="val-container">
        {array.map((value, idx) => (
          <div className="val-line" key={idx} style= {{width: `${value/10}%`}}>
          </div>
        ))}
        </div>
      </div>
    );
  }

}
//key idx = key for rendered values in interable
function randomNumberGenIntervalBetw(min, max){
  return (Math.ceil(Math.random()*max) + min);
}


export default SortingAlgorithm;
