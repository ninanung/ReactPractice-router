import React from 'react';
import BigText from '../components/BigText';

const About = ({ match }) => {
    return (
        <div>
           <BigText>소개</BigText>
           <div>
               { match.params.username }의 소개
           </div>
        </div>
    );
};

export default About;