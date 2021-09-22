import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../linkButton'
import Button from '../../button'

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
    padding : 15px;
    flex-direction : row;
    display : flex;
    gap : 15px;
`
const RightWrapper = styled.div`
    padding : 15px;
    padding-right : 0px;
    flex-direction : row;
    display : flex;
    gap : 15px;
    align-items : center;
`


const LowerHeader = () => {
    return <MainWrapper>
        <SubWrapper>
            <LeftWrapper></LeftWrapper>
            <RightWrapper>
                <LinkButton
                    label="Home"
                    href="#"
                />
                <LinkButton
                    label="About Us"
                    href="#"
                />
                <LinkButton
                    label="Services"
                    href="#"
                />
                <LinkButton
                    label="Contacts"
                    href="#"
                />
                <Button 
                    label="Get Started"
                />
            </RightWrapper>
        </SubWrapper>
    </MainWrapper>
}

export default LowerHeader


// LinkButton