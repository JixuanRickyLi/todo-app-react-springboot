//Changed to old version code because now REACT has changed to app function
import React, { Component } from 'react';
import './App.css';
// import FirstComponent from './Components/learning-examples/FirstComponent'
// import SecondComponent from './Components/learning-examples/SecondComponent'
// import ThirdComponent from './Components/learning-examples/ThirdComponent'
// import Counter from './Components/counter/Counter'
import TodoApp from "./Components/todo/TodoApp";
import './Bootstrap/bootstrap.css'

class App extends Component {
  render() {
    return (
        <div className="App">
            {/*<Counter/>*/}
            <TodoApp/>
        </div>
    );
  }
}

//
//
// class LearningComponents extends Component{
//     render() {
//         return (
//             <div className="LearningComponents">
//                 My Hello World
//                 <FirstComponent/>
//                 <SecondComponent/>
//                 <ThirdComponent/>
//             </div>
//         );
//     }
// }

export default App;
