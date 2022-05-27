import React from "react";
import likeImg from "../images/like.png";
import unlikeImg from "../images/unlike.png";

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

// import React from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import YesOrNoButton from "./components/YesOrNoButton";
// import Message from "./components/Message";
// import foodArr from "./components/food";
// import "./App.css";
// import likeImg from "./images/like.png";
// import unlikeImg from "./images/unlike.png";

// class App extends React.Component {
//   state = {
//     food: [],
//     isDisabled: false,
//     currentImg: foodArr[0].image,
//     currentImgName: foodArr[0].name,
//     counterHappy: 0,
//     counterSad: 0,
//     isMessage: false,
//   };
//   componentDidMount = () => {
//     this.setState((prev) => {
//       return { food: foodArr };
//     });
//   };

//   onHandleClick = (idButton) => {
//     this.setState({ isDisabled: true });
//     if (idButton === "no") {
//       this.setState((prev) => {
//         let idx = prev.counterSad + 1 + prev.counterHappy;
//         return { counterSad: prev.counterSad + 1, currentImg: prev.food[idx].image, currentImgName: prev.food[idx].name, isDisabled: false };
//       });
//     } else if (idButton === "yes") {
//       this.setState((prev) => {
//         let idx = prev.counterSad + prev.counterHappy + 1;
//         return { counterHappy: prev.counterHappy + 1, currentImg: prev.food[idx].image, currentImgName: prev.food[idx].name, isDisabled: false };
//       });
//     }
//   };
//   // componentDidUpdate = () => {
//   //   const totalCount = this.state.counterHappy + this.state.counterSad;
//   //   console.log(totalCount);
//   //   if (totalCount === 10) {
//   //     console.log(totalCount);
//   //     this.setState({ isMessage: true });
//   //   }
//   // };

//   popMessage = () => {
//     const totalCount = this.state.counterHappy + this.state.counterSad;
//     console.log(totalCount);
//     if (totalCount === 10) {
//       console.log(totalCount);
//       this.setState({ isMessage: true });
//     }

//     return true;
//   };
//   render() {
//     return (
//       <div className="container">
//         {this.state.isMessage ? (
//           this.popMessage()
//         ) : (
//           <div className="inner-container">
//             <Header counterSad={this.state.counterSad} counterHappy={this.state.counterHappy} />
//             <Main image={this.state.currentImg} text={this.state.currentImgName} />
//             <div className="footer-wrapper">
//               <YesOrNoButton disabled={this.state.isDisabled} image={unlikeImg} onHandleClick={this.onHandleClick} id="no" />
//               <YesOrNoButton disabled={this.state.isDisabled} image={likeImg} onHandleClick={this.onHandleClick} id="yes" />
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

//later

// import React from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import YesOrNoButton from "./components/YesOrNoButton";
// import Message from "./components/Message";
// import foodArr from "./components/food";
// import "./App.css";
// import likeImg from "./images/like.png";
// import unlikeImg from "./images/unlike.png";

// class App extends React.Component {
//   state = {
//     food: [],
//     isDisabled: false,
//     currentImg: foodArr[0].image,
//     currentImgName: foodArr[0].name,
//     counterHappy: 0,
//     counterSad: 0,
//     isMessage: false,
//   };
//   componentDidMount = () => {
//     this.setState((prev) => {
//       return { food: foodArr };
//     });
//   };

//   onHandleClick = (idButton) => {
//     this.setState({ isDisabled: true });

//     if (idButton === "no") {
//       this.setState((prev) => {
//         let idx = prev.counterSad + 1 + prev.counterHappy;
//         return { counterSad: prev.counterSad + 1, currentImg: prev.food[idx].image, currentImgName: prev.food[idx].name, isDisabled: false };
//       });
//     } else if (idButton === "yes") {
//       this.setState((prev) => {
//         let idx = prev.counterSad + prev.counterHappy + 1;
//         return { counterHappy: prev.counterHappy + 1, currentImg: prev.food[idx].image, currentImgName: prev.food[idx].name, isDisabled: false };
//       });
//     }
//   };

//   // popMessage=()=>{
//   //   if (!this.state.currentImg) {
//   //     this.setState({ isMessage: true });
//   // }}
//   componentDidUpdate = () => {
//     let idx = this.state.counterSad + this.state.counterHappy;
//     console.log(idx);
//     if (idx === 8) {
//       this.setState({ isMessage: true });
//     }
//   };

//   render() {
//     return (
//       <div className="container">
//         {this.state.isMessage && <Message />}

//         <div className="inner-container">
//           <Header counterSad={this.state.counterSad} counterHappy={this.state.counterHappy} />

//           <Main image={this.state.currentImg} text={this.state.currentImgName} />
//           <div className="footer-wrapper">
//             <YesOrNoButton disabled={this.state.isDisabled} image={unlikeImg} onHandleClick={this.onHandleClick} id="no" />
//             <YesOrNoButton disabled={this.state.isDisabled} image={likeImg} onHandleClick={this.onHandleClick} id="yes" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
