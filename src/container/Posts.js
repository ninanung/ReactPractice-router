import React from "react";
import BigText from "../components/BigText";
import { Link, Route } from "react-router-dom";

const logo = {
    height: '3.5rem',
    backgroundColor: "#212529",
    width: "100vw",
    lineHeight: '3.5rem',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: "none"
};

const Post = ({ match }) => {
    return(
        <div>
            <h1>{ match.params.title }</h1>
        </div>
    );
}

const Posts = () => {
    return(
        <div>
            <BigText>포스트</BigText>
            <div style={ logo }>리엑트</div>
            <Link style={ logo } to="/posts/react">React</Link>
            <Link style={ logo } to="/posts/redux">Redux</Link>
            <Link style={ logo } to="/posts/relay">Relay</Link>
            <Route 
                path="/posts/:title" 
                component={ Post }>
            </Route>
        </div>
    );
};

export default Posts;