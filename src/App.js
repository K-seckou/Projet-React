import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends Component {

  state = {
    text: sampleText
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({text})
  }

  randerText = text1 => {
    const __html  = marked(text1, {sanitize : true})
    return { __html }
  }

  componentDidMount(){

    const text =  localStorage.getItem('text')
    if(text){
      this.setState({text})
    }else{
      this.setState({sampleText})
    }
  }
  componentDidUpdate(){
    const  { text } = this.state
    localStorage.setItem('text',text)
  }

 render() { 
 
    return (
      <div className='container' >
          <div className="row">
            <div className="col-sm-6">
                <textarea 
                value={this.state.text}
                onChange={ this.handleChange}
                className="form-control"  
                rows="35">

                </textarea>
            </div>
            <div className="col-sm-6">
              <div dangerouslySetInnerHTML={this.randerText(this.state.text)}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
