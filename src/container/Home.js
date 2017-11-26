import React from "react";
import BigText from '../components/BigText';

const Home = ({history}) => {
    return(
        <div>
            <BigText>홈</BigText>
            <button onClick={ () => {
                history.push("/posts")
            } }>To the Post</button>
        </div>
    );
}

export default Home;