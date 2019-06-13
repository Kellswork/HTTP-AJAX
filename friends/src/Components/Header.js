import React from 'react'
import styled from 'styled-components';


const Div = styled.div`
text-align: center;
padding-top: 20px;
padding-bottom: 20px;
}
`;


export default function header() {
    return (
        <Div>
            <h2>Friend's List</h2>
        </Div>
    )
}
