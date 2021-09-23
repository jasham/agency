import React from 'react'
import styled from 'styled-components'
import { device } from '../../utility/layout'
import CText from '../../components/text'
import { fontFamily, fSize } from '../../utility/font'
import theme from '../../utility/theme'
import Button from '../../components/button'
import laptop from '../../assets/images/laptop.png'
import Campign from '../../assets/images/campaign.png'
import Georgie from '../../assets/images/georgie.png'
import Igor from '../../assets/images/igor.png'
import Design from '../../assets/images/design.png'
import Ilya from '../../assets/images/ilya.png'
import LinkButton from '../../components/linkButton'
import LabelIcon from '../../components/labelIcon'
import PhoneIcon from '../../assets/icons/phone'
import Mail from '../../assets/icons/mail'
import Pin from '../../assets/icons/pin'

const MainWrapper = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
    background-color : ${theme.darkshade};
    min-height : 200px;
    padding-bottom : 20px;
    padding-top : 80px;
    /* position : absolute; */
    width : 100%;
    height: 100%;
    /* top : 100px; */
    /* bottom : 0; */
`
const SubWrapper = styled.div`
    width : 80%;
    height : 100%;
    max-width : ${device.desktopL};
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    justify-content : space-around;
    align-items : center;
    /* background-color : red; */
`

const MainFooter = styled.div`
    position : relative;
    height : 100%;
    width : 100%;
    /* background-color : orange; */
`

const SubFooter = styled.div`
    height : 200px;
    width : 100%;
    background-color : ${theme.gray2};
    display : flex;
    justify-content : center;
    align-items : center;
`

const Content = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`
const Column = styled.div`
    display : flex;
    flex-direction : column;
    width : ${props => props.width ? props.width : "23%"};
`

const WrapperContent = styled.div`
    position : relative;
    background-color : red;
`
const Footer = () => {
    return <WrapperContent>
        {/* <SubFooter>
            <SubWrapper>

            </SubWrapper>
        </SubFooter> */}
        <MainWrapper>
            <SubWrapper>
                <MainFooter>  
                    <Content>
                        <Column>
                            {/* logo */}
                            <div style={{ marginBottom : 10}}>
                                <CText 
                                    label="Service & Support: Before the launch is after the launch! We won't leave you alone after a project. Regardless of whether it is maintenance or expansion of the product - we are always at your side as a contact for your concerns."
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('12px')}
                                    color={theme.gray1}
                                />
                            </div>
                            <div style={{ marginBottom : 6}}>
                                <LabelIcon 
                                    icon={<PhoneIcon height="15px"/>}
                                    text="+4917643650517"
                                    fsize={fSize('12px')}
                                />
                            </div>
                            <div style={{ marginBottom : 6}}>
                                <LabelIcon 
                                    icon={<Mail height="13px" />}
                                    text="info@name.com"
                                    fsize={fSize('12px')}
                                />
                            </div>
                            <div style={{ marginBottom : 6}}>

                            <LabelIcon 
                                icon={<Pin />}
                                text="Germany"
                                fsize={fSize('12px')}
                                />
                            </div>
                        </Column>
                        <Column>
                            <CText 
                                label="Quick Link"
                                ffamily={fontFamily('semiB')}
                                fsize={fSize('regular')}
                                color={theme.white}
                            />
                            <LinkButton 
                                label="Home"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="About Us"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="Services"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="Projects"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="Contact"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="Blog"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                        </Column>
                        <Column>
                            <CText 
                                label="Support"
                                ffamily={fontFamily('semiB')}
                                fsize={fSize('regular')}
                                color={theme.white}
                            />
                            <LinkButton 
                                label="Terms & Services"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="Privacy Policy"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="Disclaimer"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="24/7 Support"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            <LinkButton 
                                label="FAQ"
                                ffamily={fontFamily('regular')}
                                fsize={fSize('12px')}
                                color={theme.gray1}
                            />
                            
                        </Column>
                        <Column>
                            <CText 
                                label="Follow Us"
                                ffamily={fontFamily('semiB')}
                                fsize={fSize('regular')}
                                color={theme.white}
                            />
                        </Column>
                    </Content>
                </MainFooter>
            </SubWrapper>
        </MainWrapper>
    </WrapperContent>
}

export default Footer