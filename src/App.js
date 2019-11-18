import React from 'react';
import $ from 'jquery';
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

  getResumeData1() {
    $.ajax({
      url: '/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data) {
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert("no data found " + err);
      }
    });
  }

  async getResumeData() {
    try{
      const response = await axios.get('resumeData.json');
      alert('data is' + response.data);
      this.setState({resumeData: response.data});
    } catch(error){
      alert("cannot get resume data from json");
    }
  }

  componentDidMount() {
    this.getResumeData();
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
