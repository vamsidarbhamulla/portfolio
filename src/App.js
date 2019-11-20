import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  async getResumeData() {
    try{
      const response = await axios.get('resumeData.json');
      console.log('data is' + response.data);
      this.setState({resumeData: response.data});
    } catch(error){
      console.log("cannot get resume data from json");
    }
  }

  componentDidMount() {
    console.log('inside did mount');
    this.getResumeData();
    console.log('after did mount');
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
