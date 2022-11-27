import React from 'react'
import styled from 'styled-components'
import LabelIcon from '../../labelIcon'
import PhoneIcon from '../../../assets/icons/phone'
import Mail from '../../../assets/icons/mail'
import Pin from '../../../assets/icons/pin'
import Facebook from '../../../assets/icons/facebook'
import Instagram from '../../../assets/icons/insta'

const MainWrapper = styled.div`
    display : flex;
    align-items : center;
`
const SubWrapper = styled.div`
    max-width : 1440px;
    width : 100%;
    display : flex;
    justify-content : space-between;
`

const LeftWrapper = styled.div`
    background-color : ${props => props.theme.maincolor};
    padding : 15px;
    flex-direction : row;
    display : flex;
    gap : 15px;
    border-bottom-right-radius : 10px;
`
const RightWrapper = styled.div`
    background-color : ${props => props.theme.maincolor};
    padding : 15px;
    flex-direction : row;
    display : flex;
    gap : 15px;
    border-top-left-radius : 10px;
    align-items : center;
`
const UpperHeader = () => {
    return <MainWrapper>
        <SubWrapper>
            <LeftWrapper>
                <LabelIcon 
                    icon={<PhoneIcon />}
                    text="+91-971-739-9814"
                />
                <LabelIcon 
                    icon={<Mail />}
                    text="info@lehelpservices.com"
                />
                <LabelIcon 
                    icon={<Pin />}
                    text="India"
                />
            </LeftWrapper>
            <RightWrapper>
                <Facebook />
                <Instagram />
            </RightWrapper>
        </SubWrapper>
    </MainWrapper>
}

export default UpperHeader
