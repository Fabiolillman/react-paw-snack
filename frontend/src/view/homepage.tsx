import styled from "styled-components"
import {Link } from 'react-router-dom';
import img from "../asset/./cc-sleep.png"
import img2 from "../asset/./cc.png"
import img3 from "../asset/./cc glasses.png"
import img4 from "../asset/./glasses.png"
import img5 from "../asset/./white-paw.png"
import img6 from "../asset/./filled-bone.png"
import img7 from "../asset/./sky.jpg"


const HomePage=()=>{
return (
    <CoverDiv>
        {/* <div className="frame"></div> */}
        <aside className="links">
            <h2>Bio</h2>
            <h2>
            <Link to={`/treat`}>Treat</Link>
            </h2>
            <h2>Walks</h2>
        </aside>
        <div className="main-frame">
            <div className="name-container">
                <h2>C</h2>
                <h2>C</h2>
            </div>
        <img className="main-pic" src={img} alt="Dog sleeping" />
        </div>
        
        <aside className="customer">
            <h2>Reviewers</h2>
            <img src={img2} alt="It's just a cute dog" />
            <p>Nr1 doggo</p>
            <img src={img4} alt="Another cute dog, not the same as the first one" />
            <p>Very cute dog indeed</p>
            <img src={img3} alt="Not the first or 2'nd dog from above" />
            <p>Should definitely buy her more sweets</p>
        </aside>
        {/* <div className="frame"></div> */}
        </CoverDiv>
)
}

const CoverDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: black;
background-image: url(${img7});
background-repeat: no-repeat;
background-size: cover;
justify-content: center;
.frame{
    width: 4rem;
    height: 100vh;
    background-image: url(${img5});
    background-size: contain;
}
p,h2{
    text-align: center;
    color: pink;
}
aside h2{
font-size: 2rem;
font-weight: 500;
list-style: none;
color: red;
margin: 0.5rem 0 0.5rem 0;
line-height: 10rem;
width: 12.5rem;
height: 10rem;
background-image: url(${img6});
background-repeat: no-repeat;
background-size: 20rem 18rem;
background-position: center;
transition: transform 0.3s ease-in-out;
&:hover{
  transform: rotate(6deg);
  }
    color: red;
    cursor: pointer;
}

.main-pic{
max-width: 30rem;
max-height: 30rem;
}

.name-container h2:hover{
    cursor: default;
    transform: scale(1.1) rotate(2deg);
    transition: transform 0.3s ease-in-out;
}

.main-frame{
    margin: 2rem 10%;
}

.links{
    padding-top: 10rem;
}

.name-container{
    display: flex;
    justify-content: center;
}
.name-container h2{
    color: #dfdf65;
    font-size: 12rem;
}
.customer{
    width: 20rem;
    display: flex;
    flex-direction: column;
}
.customer h2{
    margin: 0 auto;
   cursor: default;
}
.customer img{
    box-sizing: border-box;
    margin: 2rem auto 0 auto;
    height: 11.5rem;
    width: 11.5rem;
    border: 3px solid orange;
    border-radius: 50%;
    background-color: yellow;
}

.customer img:hover{
    transform: scaleX(-1);
}

`;


export default HomePage