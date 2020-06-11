import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import Result from './components/Result';

class App extends Component {
  constructor(){
    super();

    this.state={
      a:"",
      present:"",
      result:""
    }
  }
  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "AC"){
        this.reset()
    }
    else if(button==="+/-"){
      this.oppos()
    }
    else if(button==="%"||button==="+"||button==="-"||button==="*"||button==="/"){
      this.setState({
        a:"",
        result: this.state.result + button
      })
    }

    else {
        this.setState({
          a:this.state.a+button,
          present: this.state.a+ button,
          result: this.state.result + button
        })
    }
};
// hàm đảo ngược
  oppos=()=>{
    console.log(this.state.present.slice(0,1))
    let b= this.state.result.lastIndexOf(this.state.present);
    console.log(b);
    if(this.state.present.slice(0,1)==="-"){
      this.setState({
        a:this.state.a.replace("-",""),
        present: this.state.present.replace("-",""),
        result: this.state.result.substring(0,b)+this.state.result.substring(b+1)
      })
    }
    else{this.setState({
      a: "-"+this.state.a,
    present:  "-"+this.state.present,
    result: this.state.result.substring(0,b)+"-"+this.state.result.substring(b)
  })
  }
}
  calculate = () => {
    let b= this.state.result;
    console.log(b)
    b= b.replace("--","+");
    console.log(b)
    try{
      this.setState({
        a:eval(b),
        present: eval(b) ,
        result: eval(b)
    })
    }
    catch(e){
      this.setState({
        present: 'error',
        result: 'error'
      })
    }
        
    
};

reset = () => {
    this.setState({
        result: "",
        present:"",
        a:""
    })
};


  render(){
    return(
      <div>
        <div className="calculator-body">
          <Result result={this.state.present}/>
          <Keyboard onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}

export default App;
