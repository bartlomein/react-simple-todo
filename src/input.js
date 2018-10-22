import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formText: ""
    };
    this.updateText = this.updateText.bind(this);
    this.submitText = this.submitText.bind(this);
  }

  updateText(event) {
    this.setState({
      formText: event.target.value
    });
  }

  submitText(event) {
    event.preventDefault();
    this.setState({
      formText: this.state.formText
    });
    this.props.handleText(this.state.formText);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.text}
            onChange={this.updateText}
          />
          <input type="submit" onClick={this.submitText} />
          <div>
            <div>
              <h1>CHILD</h1>
              <h3>{this.state.formText}</h3>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
