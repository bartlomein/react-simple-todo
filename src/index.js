import React from "react";
import ReactDOM from "react-dom";
import Input from "./input";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passedFromChild: new Array()
    };

    this.handleData = this.handleData.bind(this);
    this.clearData = this.clearData.bind(this);
    this.removeLastItem = this.removeLastItem.bind(this);
  }

  handleData(data) {
    const joined = this.state.passedFromChild.concat(data);
    this.setState({
      passedFromChild: joined
    });
  }

  removeLastItem(e) {
    var array = [...this.state.passedFromChild]; // make a separate copy of the array
    var index = array.indexOf(e.target.value);
    array.splice(index, 1);
    this.setState({ passedFromChild: array });
  }

  clearData(e) {
    e.preventDefault();
    this.setState({
      passedFromChild: []
    });
  }

  render() {
    return (
      <div className="App">
        <Input handleText={this.handleData} />
        <div>
          <h1>PARENT</h1>
          <ul>
            {this.state.passedFromChild.map(function(name, index) {
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </div>
        <div>
          <button onClick={this.removeLastItem}>Remove Last Item</button>
          <button onClick={this.clearData}>Clear Data</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
