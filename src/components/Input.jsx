import React from "react";
import styled from "styled-components";

const inputStyles = styled.input`
    width: '100px';
    height: '200px';
    border: 1px solid yellow;
`

function Input({ children, size, ...rest }) {
    return (
        <inputStyles size={size}  >
            {children}
        </inputStyles>
    )
}

export default Input;
