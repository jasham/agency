import React from 'react'
import styled from 'styled-components'
import CText from '../text'
import theme from '../../utility/theme'
import {fontFamily, fSize } from '../../utility/font'

const StyledLabel = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
`
const LabelIcon = (props) => {
    return <StyledLabel>

        <span style={{ width : 25,}}>{props.icon} </span>&nbsp;
        <CText
            label={props.text}
            color={props.color || theme.white}
            ffamily={fontFamily("regular")}
            fsize={props.fsize ? props.fsize  : fSize("regular")}
        />
    </StyledLabel>
}

export default LabelIcon