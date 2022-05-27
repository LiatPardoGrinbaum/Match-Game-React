import React from "react";

class Message extends React.Component {
  text = () => {
    if (this.props.countSad > 4) {
      return (
        <div>
          <h2>So many dislikes??? </h2>
          <h2>You don't know what you're missing...</h2>
        </div>
      );
    } else if (this.props.countSad <= 4) {
      return (
        <div>
          <h2>Yeah! </h2>
          <h2>You have a good taste. </h2>
        </div>
      );
    }
  };
  render() {
    return <div>{this.text()}</div>;
  }
}

export default Message;
