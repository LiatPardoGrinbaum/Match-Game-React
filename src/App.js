import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import YesOrNoButton from "./components/YesOrNoButton";
import Message from "./components/Message";
import foodArr from "./components/food";
import "./App.css";
import likeImg from "./images/like.png";
import unlikeImg from "./images/unlike.png";

class App extends React.Component {
  state = {
    food: [],
    isDisabled: false,
    currentImg: foodArr[0].image,
    currentImgName: foodArr[0].name,
    counterHappy: 0,
    counterSad: 0,
    isMessage: false,
  };
  componentDidMount = () => {
    this.setState((prev) => {
      return { food: foodArr };
    });
  };

  onHandleClick = (idButton) => {
    const totalCount = this.state.counterHappy + this.state.counterSad;
    if (totalCount === 9) {
      this.setState({ isMessage: true });
    } else {
      this.setState({ isDisabled: true });
      if (idButton === "no") {
        this.setState((prev) => {
          let idx = prev.counterSad + 1 + prev.counterHappy;
          return { counterSad: prev.counterSad + 1, currentImg: prev.food[idx].image, currentImgName: prev.food[idx].name, isDisabled: false };
        });
      } else if (idButton === "yes") {
        this.setState((prev) => {
          let idx = prev.counterSad + prev.counterHappy + 1;
          return { counterHappy: prev.counterHappy + 1, currentImg: prev.food[idx].image, currentImgName: prev.food[idx].name, isDisabled: false };
        });
      }
    }
  };
  // componentDidUpdate = () => {
  //   const totalCount = this.state.counterHappy + this.state.counterSad;
  //   console.log(totalCount);
  //   if (totalCount === 10) {
  //     console.log(totalCount);
  //     this.setState({ isMessage: true });
  //   }
  // };

  render() {
    return (
      <div className="container">
        <div className="inner-container">
          <Header counterSad={this.state.counterSad} counterHappy={this.state.counterHappy} />
          <div className="main-wrapper">{this.state.isMessage ? <Message countSad={this.state.counterSad} /> : <Main image={this.state.currentImg} text={this.state.currentImgName} />}</div>
          <div className="footer-wrapper">
            <YesOrNoButton disabled={this.state.isDisabled} image={unlikeImg} onHandleClick={this.onHandleClick} id="no" classN="none" />
            <YesOrNoButton disabled={this.state.isDisabled} image={likeImg} onHandleClick={this.onHandleClick} id="yes" classN="fix-img" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
