import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => this.setState({
        title: json.title, 
        body: json.body
      })
    );
  }

  // componentWillMount() {
  //   console.log('WillMount');
  // }

  // componentDidUpdate() {
  //   console.log('DidUpdate');
  // }

  // componentWillReceiveUpdate(nextProps, nextState) {
  //   console.log('WillReceiveProps');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'Something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const {title, body} = this.state;

    return (
      <div>
        <h1>Title: {title}</h1> {' '}
        <p>Body: {body}</p>
      </div>
    );
  }
}

export default Test;
