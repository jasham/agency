import React, { useState } from 'react'
import Header from '../../components/header'
import FirstPage from './firstPage'
import AboutUs from './aboutus'
import ServicesPage from './services'
import OurProject from './ourprojects'
import Footer from './footer'
import Blogs from './blogs'
import styled from 'styled-components'
import { device } from '../../utility/layout'
import theme from '../../utility/theme'
import Logo from '../../assets/icons/ninj.svg'
import Button from '../../components/button'
import Hamburger from '../../assets/icons/hamburger'
import LinkButton from '../../components/linkButton'
import LabelIcon from '../../components/labelIcon'
import Mail from '../../assets/icons/mail'
import Pin from '../../assets/icons/pin'
import PhoneIcon from '../../assets/icons/phone'

const MobHeader =styled.div`
    margin-bottom : 20px;
    padding-left : 20px;
    padding-right : 20px;
    background-color : ${theme.darkshade};
    padding-top : 20px;
    padding-bottom : 15px;
    @media ${device.mobileS} { 
        display : block;
    };
    @media ${device.mobileM} { 
        display : block;
    };
    @media ${device.mobileL} { 
        display : block;
    };
    @media ${device.tablet} { 
        display : none;
    };
`
const WebHeader =styled.div`
    margin-bottom : 20px;
    @media ${device.mobileS} { 
        display : none;
    };
    @media ${device.mobileM} { 
        display : none;
    };
    @media ${device.mobileL} { 
        display : none;
    };
    @media ${device.tablet} { 
        display : block;
    };
`

const RespMob = styled.div`
    height : ${props => props.height ? "350px" : '50px'};
    transition: all 0.3s ease-out;
    overflow : hidden;
`
const Home = () => {
    const [resHeight,setHeight] = useState(false)

    const toggle = () => {
        resHeight ? setHeight(false) : setHeight(true) 
    }

    return <div>
        <MobHeader>
            <RespMob height={resHeight}>
                <div style={{ marginBottom : 20}}>
                    <span onClick={toggle}>
                        <Hamburger fill={theme.white} />
                    </span>

                    <img src={Logo} alt="logo" style={{ marginLeft : 15}}/>
                </div>
                <div style={{ paddingLeft : 60, marginBottom : 6}}>
                    <LinkButton 
                        label="Home"
                        color={theme.white}
                    />
                </div>
                <div style={{ paddingLeft : 60, marginBottom : 6}}>
                    <LinkButton
                        label="About Us"
                        href="#"
                        color={theme.white}

                    />
                </div>
                <div style={{ paddingLeft : 60, marginBottom : 6}}>
                    <LinkButton
                        label="Services"
                        href="#"                        
                        color={theme.white}
                    />
                </div>
                <div style={{ paddingLeft : 60, marginBottom : 15}}>
                    <LinkButton
                        label="Contacts"
                        href="#"
                        color={theme.white}
                    />
                </div>
                <div style={{ paddingLeft : 60, marginBottom : 10}}>
                    <Button 
                        label="Get Started"
                    />
                </div>
                <div style={{ paddingLeft : 60, marginBottom : 10}}>
                    <LabelIcon 
                        icon={<PhoneIcon />}
                        text="+4917643650517"
                    />
                </div>
                <div style={{ paddingLeft : 60, marginBottom : 10}}>
                    <LabelIcon 
                        icon={<Mail />}
                        text="info@name.com"
                    />
                </div>
                <div style={{ paddingLeft : 60, marginBottom : 10}}>
                    <LabelIcon 
                        icon={<Pin />}
                        text="Germany"
                    />
                </div>
            </RespMob>
        </MobHeader>
        <WebHeader>
            <Header />
        </WebHeader>
        <div style={{ marginBottom : 20}}>
            <FirstPage />
        </div>
        <div style={{ marginBottom : 20}}>
            <AboutUs />
        </div>
        <div style={{ marginBottom : 20}}>
            <ServicesPage />
        </div>
        <div style={{ marginBottom : 20}}>
            <OurProject />
        </div>
        <div>
            <Blogs />
        </div>
        <div>
            <Footer />
        </div>
    </div>
}

export default Home