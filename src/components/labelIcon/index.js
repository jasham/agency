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
        {props.icon} &nbsp;
        <CText
            label={props.text}
            color={theme.white}
            ffamily={fontFamily("regular")}
            fSize={fSize("regular")}
        />
    </StyledLabel>
}

export default LabelIcon