import React from 'react'
import styled from 'styled-components'
import { device } from '../../utility/layout'
import CText from '../../components/text'
import { fontFamily, fSize } from '../../utility/font'
import theme from '../../utility/theme'
import Button from '../../components/button'
import laptop from '../../assets/images/group.png'

const MainWrapper = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

const SubWrapper = styled.div`
    width : 80%;
    max-width : ${device.desktopL};
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    @media ${device.mobileS} { 
        flex-direction : column;
        width : 90%;
    }
    @media ${device.tablet} { 
        flex-direction : row;
        width : 80%;
    }
`
const LeftWrapper = styled.div`
    width : 50%;
    flex-direction : column;
    display : flex;
    @media ${device.mobileS} { 
        width : 100%;
    };
    @media ${device.tablet} { 
        width : 48%;
    };
`
const FlexRow = styled.div`
    display : flex;
    flex-direction : row;
`
const RightWrapper = styled.div`
    width : 50%;
    display : flex;
    background-image : url(${laptop});
    background-repeat : no-repeat;
    background-size : contain;
    height : 370px;
    @media ${device.mobileS} { 
        width : 100%;
    };
    @media ${device.tablet} { 
        width : 50%;
    };
`


const AboutUs = () => {
    return <MainWrapper>
        <SubWrapper>
            <RightWrapper />
            <LeftWrapper>
                <div style={{ marginBottom : 15}}>
                    <CText 
                        label="ABOUT "
                        ffamily={fontFamily('semiB')}
                        fsize={fSize("35px")}
                    />
                    
                    <CText 
                        label="LEHELPSERVICES "
                        ffamily={fontFamily('semiB')}
                        fsize={fSize("35px")}
                        color={theme.maincolor}
                    />
                   
                </div>
                <CText 
                    label="We develop individual digital solutions at company level and drive the digital transformation of your company. Here we rely on flexible modular solutions, a combination of standard software."
                    ffamily={fontFamily('regular')}
                    fsize={fSize("regular")}
                    color={theme.gray2}
                />
                <FlexRow style={{ marginTop : 30}}>
                    <Button 
                        label="Read More"
                        bgColor={true}
                        color={theme.white}
                    />
                </FlexRow>
            </LeftWrapper>
        </SubWrapper>
    </MainWrapper>
}

export default AboutUs
