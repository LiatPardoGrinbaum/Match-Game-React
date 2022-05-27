import React from "react";

class YesOrNoButton extends React.Component {
  handleClick = () => {
    this.props.onHandleClick(this.props.id);
  };
  render() {
    return (
      <div>
        <div className="likeOrNot like">
          <button className="btn" onClick={this.handleClick} disabled={this.props.disabled}>
            <img src={this.props.image} alt="like" className={this.props.classN} />
          </button>
        </div>
      </div>
    );
  }
}

export default YesOrNoButton;
