import React from 'react'
import styled from 'styled-components'
import { device } from '../../utility/layout'
import CText from '../../components/text'
import { fontFamily, fSize } from '../../utility/font'
import theme from '../../utility/theme'
import Button from '../../components/button'
import laptop from '../../assets/images/laptop.png'

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
    @media ${device.mobileS} { 
        flex-direction : column;
        width : 90%;
    }
    @media ${device.laptop} { 
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
    @media ${device.laptop} { 
        width : 48%;
    };
`
const FlexRow = styled.div`
    display : flex;
    flex-direction : row;
`
const RightWrapper = styled.div`
    width : 48%;
    display : flex;
    background-image : url(${laptop});
    background-repeat : no-repeat;
    background-size : contain;
    height : 370px;
    @media ${device.mobileS} { 
        width : 100%;
    };
    @media ${device.laptop} { 
        width : 100%;
    };
`
const RMobWrapper = styled.div`
    @media ${device.mobileS} { 
        display : block;
    };
    @media ${device.laptop} { 
        display : none;
    };
`

const RLapWrapper = styled.div`
    width : 50%;
    @media ${device.mobileS} { 
        display : none;
    };
    @media ${device.laptop} { 
        display : block;
    };
`

const FirstPage = () => {
    return <MainWrapper>
        <SubWrapper>
            <RMobWrapper>
                <RightWrapper />
            </RMobWrapper>
            <LeftWrapper>
                <div style={{ marginBottom : 15}}>
                    <CText 
                        label="We Are Best "
                        ffamily={fontFamily('semiB')}
                        fsize={fSize("35px")}
                    />
                    
                    <CText 
                        label="Design & Development "
                        ffamily={fontFamily('semiB')}
                        fsize={fSize("35px")}
                        color={theme.maincolor}
                    />
                   
                    <CText 
                        label="Agency"
                        ffamily={fontFamily('regular')}
                        fsize={fSize("35px")}
                    />
                </div>
                <CText 
                    label="We develop individual digital solutions at company level and drive the digital transformation of your company. Here we rely on flexible modular solutions, a combination of standard software established on the market and sophisticated individual development"
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
            <RLapWrapper>
                <RightWrapper />
            </RLapWrapper>
        </SubWrapper>
    </MainWrapper>
}

export default FirstPage