import React from 'react'
import styled from 'styled-components'

const StyledText = styled.label`
    color : ${props => props.color ? props.color : 'initial'};
    font-family : ${props => props.ffamily ? props.ffamily : 'initial'};
    font-weight : ${props => props.fweigth ? props.fweigth : 'initial'};
    font-size : ${props => props.fsize ? props.fsize : '1em'};
    text-align : ${props => props.textAlign ? "center" : 'initial'};
`
const CText = (props) => {
    return <StyledText
        color={props.color}
        ffamily={props.ffamily}
        fweigth={props.fweigth}
        fsize={props.fsize}
        textAlign={props.textAlign}
        className={props.className}
    >
        {props.label}
    </StyledText>
}

export default CText