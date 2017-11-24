import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import About from '../container/About'
import Home from '../container/Home';
import Posts from '../container/Posts';
import Header from "./Header";

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
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
