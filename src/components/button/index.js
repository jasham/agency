import React from 'react'
import styled from 'styled-components'
import CText from '../text'
import { fontFamily, fSize } from '../../utility/font'
import theme from '../../utility/theme'

const StyledButton = styled.button`
    border : 1px solid ${props => props.theme.maincolor};
    background-color : ${props => props.backgroundColor ? props.theme.maincolor : "transparent"  };
    font-family : ${props => props.ffamily};
    border-radius : 3px;
    padding-top : 5px;
    padding-bottom : 5px;
    padding-right : 13px;
    padding-left : 13px;
    cursor: pointer;
`
const Button = (props) => {
    return <StyledButton
        backgroundColor={props.bgColor}
        ffamily={fontFamily('regular')}
    >
        <CText 
            ffamily={fontFamily('regular')}
            label={props.label}
            fsize={fSize('small')}
            color={props.color || theme.maincolor}
        />
    </StyledButton>
}

export default Button