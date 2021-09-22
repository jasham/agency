import React from 'react'
import styled from 'styled-components'
import ServiceCard from '../../components/serviceCard'
import { device } from '../../utility/layout'
import servicebgimg from '../../assets/images/servicesbg.png'
import theme from '../../utility/theme'
import CText from '../../components/text'
import { fontFamily, fSize } from '../../utility/font'
import MobileIcon from '../../assets/icons/mobileapp'
import DesignThinking from '../../assets/icons/designThinking'
import OnlineShoping from '../../assets/icons/onlineshopping'
import Consulting from '../../assets/icons/consultation'

const MainWrapper = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    background-image : url(${servicebgimg});
    background-repeat : no-repeat;
    background-size : cover;
`
const MWShadow = styled.div`
    width : 100%;
    /* height : 100%; */
    background-color : ${theme.darkshade};
    display : flex;
    justify-content : center;
    align-items : center;
    padding-top : 50px;
    padding-bottom : 50px;
`
const SubWrapper = styled.div`
    width : 80%;
    max-width : ${device.desktopL};
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    justify-content : space-around;
    align-items : center;
    /* @media ${device.mobileS} { 
        flex-direction : column;
        width : 90%;
    }
    @media ${device.laptop} { 
        flex-direction : row;
        width : 80%;
    } */
`
const TitleWrapper = styled.div`
    margin-bottom : 20px;
`

const DescWrapper = styled.div`
    width : 60%;
    text-align : center;
    margin-bottom : 30px;
`
const SWCards = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    justify-content : center;
    gap : 30px;
`
const ServicesPage = () => {
    return <MainWrapper>
        <MWShadow>
            <SubWrapper>
                <TitleWrapper>
                    <CText 
                        label="OUR "
                        color={theme.white}
                        ffamily={fontFamily('regular')}
                        fsize={fSize('20px')}
                    />
                    <CText 
                        label="SERVICES "
                        color={theme.maincolor}
                        ffamily={fontFamily('regular')}
                        fsize={fSize('20px')}
                    />
                </TitleWrapper>
                <DescWrapper>
                    <CText 
                        label="Service & Support: Before the launch is after the launch! We won't leave you alone after a project. Regardless of whether it is maintenance or expansion of the product - we are always at your side as a contact for your concerns."
                        color={theme.gray1}
                        ffamily={fontFamily('small')}
                        fsize={fSize('regular')}
                        textAlign="center"
                    />
                </DescWrapper>
                <SWCards>
                    <ServiceCard 
                        icon={<MobileIcon />}
                        label="App Development"
                        description="Service & Support: Before the launch is after the launch! We won't leave you alone after a project."
                    />
                     <ServiceCard 
                        icon={<DesignThinking />}
                        label="Design"
                        description="Service & Support: Before the launch is after the launch! We won't leave you alone after a project."
                    />
                     <ServiceCard 
                        icon={<OnlineShoping />}
                        label="Web Development"
                        description="Service & Support: Before the launch is after the launch! We won't leave you alone after a project."
                    />
                     <ServiceCard 
                        icon={<OnlineShoping />}
                        label="E-Commerce"
                        description="Service & Support: Before the launch is after the launch! We won't leave you alone after a project."
                    />
                     <ServiceCard 
                        icon={<Consulting />}
                        label="Consulting"
                        description="Service & Support: Before the launch is after the launch! We won't leave you alone after a project."
                    />
                </SWCards>
                
            </SubWrapper>
        </MWShadow>
    </MainWrapper>
}

export default ServicesPage