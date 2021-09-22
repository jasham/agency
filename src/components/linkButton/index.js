import React from 'react'
import CText from '../text'
import { fontFamily, fSize } from '../../utility/font'
import styled from 'styled-components'

const Anchor = styled.a`
    text-decoration : none;
    cursor: hand;
    & :hover {
        color : ${props => props.theme.maincolor};
    }
`
const LinkButton = (props) => {
    return <Anchor href={props.href}>
        <CText 
            label={props.label}
            ffamily={fontFamily('regular')}
            fsize={fSize('small')}
            color={props.color}
        />
    </Anchor>
}

export default LinkButton