import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Div = styled.div`
display: flex;
justify-content: space-around;
align-items: baseline;
padding-top: 20px;
padding-bottom: 20px;
color: #462255;
 
a:nth-child(2) {
    border: 1px solid #462255;;
    padding: 10px;
    border-radius: 4px;
    background: #462255;
    color: #F8FFFD;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    font-weight: bold;
}
a:hover, a:active {
    background:white;
    color: #462255;
   
}
a:active {
    color: #46225587;
}
}
`;

export default function header() {
  return (
    <Div>
      <h2><Link to='/'>Friends List</Link></h2>
      <Link to='/addfriend'>Add New Friend</Link>
    </Div>
  );
}
