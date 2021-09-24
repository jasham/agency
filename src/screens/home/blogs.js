import React from 'react'
import styled from 'styled-components'
import { device } from '../../utility/layout'
import CText from '../../components/text'
import { fontFamily, fSize } from '../../utility/font'
import theme from '../../utility/theme'
import BCard from '../../components/bcard'
import Calendar2 from '../../assets/icons/calendar2'
import balazs from '../../assets/images/balazs.png'
import cris from '../../assets/images/christopher.png'
import william from '../../assets/images/william.png'

const MainWrapper = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
    margin-bottom : 100px;
`

const SubWrapper = styled.div`
    width : 80%;
    max-width : ${device.desktopL};
    display : flex;
    flex-direction : column;
    flex-wrap : wrap;
    justify-content : space-around;
    align-items : center;
`
const TitleWrapper = styled.div`
    margin-bottom : 20px;
`

const DescWrapper = styled.div`
    width : 60%;
    text-align : center;
    margin-bottom : 30px;
`
const BCWrapper = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    width : 100%;
    gap : 20px;
`
const Blogs = () => {
    return <MainWrapper>
        <SubWrapper>
            <TitleWrapper>
                <CText
                    label="OUR "
                    ffamily={fontFamily('regular')}
                    fsize={fSize('20px')}
                />
                <CText 
                    label="BLOGS "
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
            <BCWrapper>
                <BCard 
                    bgImg={cris}
                    date="April 5, 2021"
                    icon={<Calendar2 height="15px"/>}
                />
                <BCard 
                    bgImg={william}
                    date="April 5, 2021"
                    icon={<Calendar2 height="15px"/>}
                />
                <BCard 
                    bgImg={balazs}
                    date="April 5, 2021"
                    icon={<Calendar2 height="15px"/>}
                />
            </BCWrapper>
        </SubWrapper>
    </MainWrapper>
}

export default Blogs