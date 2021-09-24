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
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const MainWrapper = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
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

const ImageCards = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    width : 100%;
`
const ImgCard = styled.div`
    background-image : url(${props => props.bgImg});
    background-repeat : no-repeat;
    background-size : cover;
    height : 358px;
    width : ${props => props.width ? props.width : "280px"};
    display : flex;
    flex-wrap : wrap;
    border-radius : 20px;
`
const ImgWrapper = styled.div`
    display : flex;
    flex : 1;
    background-image : url(${props => props.bgImg});
    background-repeat : no-repeat;
    background-size : cover;
    height : 358px;
    border-radius : 20px;
`
const SubImageWrapper = styled.div`
    width : 70%;
`
const ImgRowOne = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    gap : 20px;
    margin-bottom : 20px;
`
const SubImageWrapperDes = styled.div`
    width : 100%;
    height : 100%;
    background-color : ${theme.darkshade2};
    border-radius : 15px;
`

const ImgRowTwo = styled.div`
    display : flex;
    flex-direction : row;
    gap : 20px;
    margin-bottom : 20px;
    width : 100%;
`

const WOCWrapper = styled.div`
    display : flex;
    flex-direction : row;
    background-color : ${theme.darkshade};
    border-radius : 20px;
    min-height : 350px;
    justify-content : center;
    /* gap : 20px; */
    /* padding-left : 20px;
    padding-right : 20px; */
    width : 100%;
    /* max-width : 80%; */
    padding-top : 20px;
    align-items : center;
`
const BlockOne = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
`
const BlockTwo = styled.div`
    align-items : center;
    display : flex;
    flex-direction : column;
    justify-content : center;
    
`

const ImgWOCS = styled.div`
    width : 100px;
    height : 100px;
    border-radius : 20px;
    border : 2px solid ${theme.maincolor};
    margin-bottom : 15px;
`

const CusCarousel = styled(Carousel)`
    width : 100%;
`
const OurProject = (props) => {
    return <MainWrapper>
        <SubWrapper>
            <TitleWrapper>
                <CText 
                    label="OUR "
                    ffamily={fontFamily('regular')}
                    fsize={fSize('20px')}
                />
                <CText 
                    label="PROJECTS "
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
            <ImageCards>
                <ImgRowOne>
                    <ImgCard 
                        bgImg={Georgie}
                        width="32%"
                    />
                    <ImgWrapper bgImg={Design} >
                        <SubImageWrapperDes />
                    </ImgWrapper>
                </ImgRowOne>
                <ImgRowTwo>
                    <ImgCard 
                        bgImg={Igor}
                        width="32%"
                    />
                    <ImgCard 
                        bgImg={Campign}
                        width="32%"
                    />
                    <ImgCard 
                        bgImg={Ilya}
                        width="32%"
                    />
                </ImgRowTwo>
            </ImageCards>
            <WOCWrapper>
                <div style={{ width : "25%", height : "fit-content"}}>
                    <BlockOne>
                        <CText 
                            label="WHAT OUR "
                            ffamily={fontFamily('semiB')}
                            fsize={fSize('20px')}
                            color={theme.white}
                        />
                        <CText 
                            label="CLIENTS SAY "
                            ffamily={fontFamily('semiB')}
                            fsize={fSize('20px')}
                            color={theme.maincolor}
                        />
                        <CText 
                            label="Service & Support: Before the launch is after the launch! We won't leave you alone after a project. Regardless of whether it is maintenance or expansion of the product - we are always at your side as a contact for your concerns."
                            ffamily={fontFamily('regular')}
                            fsize={fSize('small')}
                            color={theme.gray1}
                        />
                    </BlockOne>
                </div>
                <div style={{ display : "flex" , alignItems : "center", width:"65%", height : "fit-content" }}>
                    <CusCarousel  
                        responsive={responsive} 
                        showDots={true}
                        arrows={false}
                    >
                        <BlockTwo>
                            <ImgWOCS>
                                
                            </ImgWOCS>
                            
                            <div style={{ display : 'flex' ,justifyContent : "center", flexDirection : "column"}}>

                                <CText 
                                    label="Alenn Watson"
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('small')}
                                    color={theme.white}
                                />
                            </div>
                            
                            <CText 
                                label="UI/UX Designer"
                                ffamily={fontFamily('light')}
                                fsize={fSize('12px')}
                                color={theme.maincolor}
                            />
                            <div style={{ width : "70%"}}>

                                <CText 
                                    label="Service & Support: Before the launch is after the launch! We won't leave you"
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('12px')}
                                    color={theme.gray2}
                                />
                            </div>
                            
                        </BlockTwo>
                        <BlockTwo>
                            <ImgWOCS>
                                
                            </ImgWOCS>
                            
                            <div style={{ display : 'flex' ,justifyContent : "center", flexDirection : "column"}}>

                                <CText 
                                    label="Alenn Watson"
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('small')}
                                    color={theme.white}
                                />
                            </div>
                            
                            <CText 
                                label="UI/UX Designer"
                                ffamily={fontFamily('light')}
                                fsize={fSize('12px')}
                                color={theme.maincolor}
                            />
                            <div style={{ width : "70%"}}>

                                <CText 
                                    label="Service & Support: Before the launch is after the launch! We won't leave you"
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('12px')}
                                    color={theme.gray2}
                                />
                            </div>
                            
                        </BlockTwo>       
                        <BlockTwo>
                            <ImgWOCS>
                                
                            </ImgWOCS>
                            
                            <div style={{ display : 'flex' ,justifyContent : "center", flexDirection : "column"}}>

                                <CText 
                                    label="Alenn Watson"
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('small')}
                                    color={theme.white}
                                />
                            </div>
                            
                            <CText 
                                label="UI/UX Designer"
                                ffamily={fontFamily('light')}
                                fsize={fSize('12px')}
                                color={theme.maincolor}
                            />
                            <div style={{ width : "70%"}}>

                                <CText 
                                    label="Service & Support: Before the launch is after the launch! We won't leave you"
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('12px')}
                                    color={theme.gray2}
                                />
                            </div>
                            
                        </BlockTwo>
                        <BlockTwo>
                            <ImgWOCS>
                                
                            </ImgWOCS>
                            
                            <div style={{ display : 'flex' ,justifyContent : "center", flexDirection : "column"}}>

                                <CText 
                                    label="Alenn Watson"
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('small')}
                                    color={theme.white}
                                />
                            </div>
                            
                            <CText 
                                label="UI/UX Designer"
                                ffamily={fontFamily('light')}
                                fsize={fSize('12px')}
                                color={theme.maincolor}
                            />
                            <div style={{ width : "70%"}}>

                                <CText 
                                    label="Service & Support: Before the launch is after the launch! We won't leave you"
                                    ffamily={fontFamily('regular')}
                                    fsize={fSize('12px')}
                                    color={theme.gray2}
                                />
                            </div>
                            
                        </BlockTwo>
                    </CusCarousel>
                </div>  
            </WOCWrapper>
        
        </SubWrapper>
    </MainWrapper>
}

export default OurProject