import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "Morning"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "Evening"})
    }, 1000)
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "Now its  " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My CodeYoung class is scheduled in the {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      </div>
    );
  }
}

export default App;
