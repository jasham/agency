import React from 'react'
import CText from '../text'
import { fontFamily, fSize } from '../../utility/font'
import styled from 'styled-components'

const Anchor = styled.a`
    text-decoration : none;
    cursor: hand;
    & :hover {
        color : ${props => props.hcolor ? props.hcolor : props.theme.maincolor};
    }
`
const LinkButton = (props) => {
    return <Anchor 
            href={props.href} 
            hcolor={props.hcolor}
        >
            <CText 
                label={props.label}
                ffamily={fontFamily('regular')}
                fsize={fSize('small')}
                color={props.color}
                className="anchor___color"
            />
        </Anchor>
}

export default LinkButton