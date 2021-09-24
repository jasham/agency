import React from 'react'
import styled from 'styled-components'
import LabelIcon from '../labelIcon'
import theme from '../../utility/theme'
import CText from '../text'
import { fontFamily, fSize } from '../../utility/font'
import LinkButon from '../../components/linkButton'

const MainWrapper = styled.div`
    display : flex;
    flex-direction : column;
    width : calc(100% / 3.5);
`
const ImageWrapper = styled.div`
    height : 250px;
    background-image : url(${props => props.bgImg});
    background-repeat : no-repeat;
    background-size : cover;
    width : 100%;
    border-top-left-radius : 20px;
    border-top-right-radius : 20px; 
    margin-bottom : 10px;
`
const BCard = (props) => {
    return <MainWrapper>
        <ImageWrapper bgImg={props.bgImg} />
        <LabelIcon 
            icon={props.icon}
            text={props.date}
            color={theme.gray1}
            fsize={fSize('12px')}
        />
        <CText 
            label="SECURITY RESEARCH THAN GET BETTER PROTECTION"
            ffamily={fontFamily("semiB")}
            fsize={fSize('regular')}
        />
        <CText 
            label="Service & Support Before the launch is after the launch! We won't eave you alone after a project. Regardless."
            ffamily={fontFamily("regular")}
            fsize={fSize('12px')}
            color={theme.gray1}
        />
        <LinkButon 
            label="Read More"
            ffamily={fontFamily('regular')}
        />
    </MainWrapper>
}

export default BCard