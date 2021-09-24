import React from 'react'
import styled from 'styled-components'
import Button from '../button'
import theme from '../../utility/theme'
import { fontFamily } from '../../utility/font'

const CusInput = styled.input`
    outline : 0px;
    background-color : transparent;
    border-style : none;
    color : ${theme.white};
    font-family : ${fontFamily('regular')};
`

const BInputWrapper  = styled.div`
    display : flex;
    flex-direction : row;
    background-color : rgba(255,255,255,0.1);
    padding-left : 15px;
    border-radius : 3px;
`
const ButtonInput = (props) => {
    return <BInputWrapper>
        <CusInput placeholder={props.placeholder} />
        <Button 
            label="Send"
            bgColor
            color={theme.white}
        />
    </BInputWrapper> 
}

export default ButtonInput