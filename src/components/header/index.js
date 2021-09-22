import React from 'react'
import UpperHeader from './upperheader'
import LowerHeader from './lowerheader'
import styled from 'styled-components'

const MainWrapper = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
`
const SubWrapper = styled.div`
    width : 80%;
    max-width : 1440px;
`
const Line = styled.div`
    border-bottom : 0.1px solid  ${props => props.theme.gray1};
    width : 100%;
    opacity : 0.2;
`
const Header = () => {
    return <MainWrapper>
            <SubWrapper>
                <UpperHeader />
            </SubWrapper>
                    <Line />
            <SubWrapper>
                {/* <LowerHeader /> */}
            </SubWrapper>
        </MainWrapper>
}

export default Header