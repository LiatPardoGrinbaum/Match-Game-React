import React from "react";
import negativeImg from "../images/nothappy.png";
import positiveImg from "../images/happy.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Food Match Game</h1>
        <div className="header-wrapper">
          <div className="headerImg">
            <img src={negativeImg} alt="negative" />
            <p>{this.props.counterSad}</p>
          </div>
          <div className="headerImg">
            <img src={positiveImg} alt="positive" />
            <p>{this.props.counterHappy}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
