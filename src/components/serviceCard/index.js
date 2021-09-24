import React from 'react'
import styled from 'styled-components'
import CText from '../text'
import { fontFamily, fSize } from '../../utility/font'
import theme from '../../utility/theme'
import LinkButton from '../linkButton'
import { device } from '../../utility/layout'

const MainWrapper = styled.div`
    border : 1px solid ${props => props.theme.maincolor};
    border-top-right-radius : 10px;
    border-bottom-left-radius : 10px;
    &:hover{
        background-color : ${props => props.theme.maincolor};
    };
    &:hover .my__unique {
        fill : white; 
    }
    &:hover .anchor___color {
        color : ${theme.white};
    }
    .anchor___color {
        color : ${theme.maincolor};
    }
    .my__unique {
        fill : ${props => props.theme.maincolor};
    }
    height : 300px;
    /* opacity : 0.3; */
    padding-left : 15px;
    padding-right : 15px;
    justify-content : center;
    align-items : center;
    display : flex;
    flex-direction : column;

    @media ${device.mobileS} { 
        width : 250px;
    };
    @media ${device.mobileM} { 
        width : 250px;
    };
    @media ${device.mobileL} { 
        width : 250px;
    };
    @media ${device.tablet} { 
        width : 300px;
    };
`
const ServiceCard = (props) => {
    return <MainWrapper>
        <div style={{ marginBottom : 15}}>
            {props.icon}
        </div>
        <div style={{ marginBottom : 15}}>
            <CText 
                label={props.label} 
                ffamily={fontFamily('regular')}
                fsize={fSize('20px')}
                color={theme.white}
            />
        </div>
        <div style={{ textAlign : "center", marginBottom : 25}}>
            <CText 
                label={props.description} 
                ffamily={fontFamily('regular')}
                fsize={fSize('regular')}
                color={theme.gray1}
            />
        </div>
        
        <LinkButton 
            label="Read More"
            href={props.href}
            // color={theme.maincolor}
            // hcolor={"white"}
        />
    </MainWrapper>
}

export default ServiceCard