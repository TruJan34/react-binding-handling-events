import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function component
// function tick() {
//     const element = (
//         <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }

// converted to reusable component Clock
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

// class Clock extends React.Component {
//     render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }

// Adding Local State to a Class
  class Clock extends React.Component {
      constructor(props) {
          super(props);
          this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.timerId);
      }

      tick() {
          this.setState({
              date: new Date()
          })
      }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

// function tick() {
   
//     ReactDOM.render(
//         // <Clock date={new Date()}/>,
//         <Clock />,
//         document.getElementById('root')
//     );
// }


// setInterval(tick, 1000);

// methods are not bound by default. 
// If you forget to bind this.handleClick and pass it to onClick,
//  this will be undefined when the function is actually called.

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
    //   this.handleClick = this.handleClick.bind(this);
    }
  
    // handleClick() {
    //   this.setState(state => ({
    //     isToggleOn: !state.isToggleOn
    //   }));
    // }
    // Way 1 to avoid bind
    // can be written as below, no need to bind
    // This syntax ensures `this` is bound within handleClick.
    // class fields syntax,
	handleClick = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    // Way 2 to avoid bind
    handleClick() {
        this.setState(state => ({
        isToggleOn: !state.isToggleOn
        }));
    }
    render() {
      return (
        // <button onClick={this.handleClick}>
        // Way 2
        <button onClick={(e) => this.handleClick(e)}> 
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

ReactDOM.render(<div><Clock /><Toggle/></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
