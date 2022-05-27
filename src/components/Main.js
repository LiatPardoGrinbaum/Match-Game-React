import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="image">
        <img src={this.props.image} alt="pic" />
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}

export default Main;
