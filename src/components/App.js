import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import About from '../container/About'
import Home from '../container/Home';
import Posts from '../container/Posts';
import Header from "./Header";
import Login from "./Login";
import Mypage from "./Mypage";

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Header>{ this.props.children }</Header>
                    <div>
                        <Route exact path="/" component={ Home }/>
                        <Route path="/about/:username" component={ About }/>
                        <Route path="/posts" component={ Posts }/>
                        <Route path="/login" component={ Login }/>
                        <Route path="/me" component={ Mypage }/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
