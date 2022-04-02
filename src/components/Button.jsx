// import React from 'react'
// import './Button.css';
import styled from 'styled-components'
const Button = styled.button`
border: none;
background-color: transparent;
border-radius: 5px;
cursor: pointer;
margin-left: 5px;
margin-right: 5px;
padding: 10px;
background-color: ${(props) => (props.theme === "dark"? "black": "white")};
color: ${(props) => (props.theme === "dark" ? "white" : "black")};

&:hover{
    background-color: aliceblue;
    color: black;
    transition: background-color 1s, color 1s;

}
`

// const Button = ({children , onClick}) => {
//   return  <button className="btn" onClick={onClick}>{children}</button>
  
// }

export  {Button}