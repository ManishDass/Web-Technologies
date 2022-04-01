import React, { Component } from 'react';
import Header from './Header/Header';
import Student from './Main/Student';
import PropTypes from 'prop-types';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Student name={"Manish"} />
      </div>
    );
  }
}

export default App;