import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Stack, Typography, Button, FormControl, OutlinedInput } from '@mui/material';
import { gsap } from 'gsap';
import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';

import img_contrast from '../../../assets/images/img_contrast.svg';
import img_grid_base from '../../../assets/images/img_grid_base.png';
import img_path_0_185x1058 from '../../../assets/images/img_path_0_185x1058.png';
import img_path_1_224x1058 from '../../../assets/images/img_path_1_224x1058.png';
import img_path_3_304x1057 from '../../../assets/images/img_path_3_304x1057.png';
import img_close_blue_gray_600 from '../../../assets/images/img_close_blue_gray_600.png';
import img_path16 from '../../../assets/images/img_path16.png';
import img_vector from '../../../assets/images/img_vector.svg';
import img_settings from '../../../assets/images/img_settings.svg';
import img_vector_blue_gray_600 from '../../../assets/images/img_vector_blue_gray_600.svg';
import img_user_blue_gray_600 from '../../../assets/images/img_user_blue_gray_600.svg';
import img_group_1000003266 from '../../../assets/images/img_group_1000003266.svg';
import img_g886 from '../../../assets/images/img_g886.svg';
import img_settings_blue_gray_600 from '../../../assets/images/img_settings_blue_gray_600.svg';


const QuantInvest = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');
  const strategyTextsRef = useRef(null);

  const slide1 = useRef<HTMLDivElement>(null);
  const slide2 = useRef<HTMLDivElement>(null);
  const slide3 = useRef<HTMLDivElement>(null);

  const [cards, setCards] = useState<any>([true, false, false]);

  const strategyTexts = ['Simplified', 'Automated', 'Optimized', 'Transparent'];
  const strategyTextColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33EC'];
  const strategyCurrentIndex = 0;

  const animateText = (
    textArray: string[],
    textIndex: number,
    textRef: React.RefObject<HTMLHeadingElement>,
    textColors: string[]
  ) => {
    const defaultColor = '#FFFFFF';
    gsap.to(textRef.current, {
      y: 50,
      duration: 1,
      opacity: 1,
      color: textColors ? textColors[textIndex] : defaultColor,
      ease: 'bounce.out',
      onComplete: () => {
        setTimeout(() => {
          gsap.to(textRef.current, {
            y: 0,
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
              textIndex = (textIndex + 1) % textArray.length;
              if (textRef.current) {
                textRef.current.innerText = textArray[textIndex];
              }
              animateText(textArray, textIndex, textRef, textColors);
            },
          });
        }, 500);
      },
    });
  };

  useEffect(() => {
    animateText(strategyTexts, strategyCurrentIndex, strategyTextsRef, strategyTextColors);
  });

  const handleSlide = () => {
    if(window.innerWidth > 768) {
      gsap.to(slide3.current, {
        x: (window.innerWidth * 3.98) / 7,
        duration: 1,
        onComplete: () => {
          gsap.to(slide2.current, {
            x: (window.innerWidth * 1.97) / 7,
            duration: 1,
          });
        },
      });
    }
  };

  const leaveSlide = () => {
    if(window.innerWidth > 768) {
      gsap.to(slide2.current, {
        x: (window.innerWidth * 0.05) / 6,
        duration: 1,
        onComplete: () => {
          gsap.to(slide3.current, {
            x: (window.innerWidth * 0.05) / 6,
            duration: 1,
          });
        },
      });
    }
  }

  const showCardInMobile = (index: number) => {
    console.log(index);
    if(window.innerWidth > 760)  return;
    let show_index: number = index + 1;
    if(show_index % 3 === 0) {
      show_index = 0;
    } else if(show_index % 3 === 1) {
      show_index = 1;
    } else {
      show_index = 2;
    }
    const _cards = JSON.parse(JSON.stringify(cards));
    _cards.map((item:number, key: number) => {
      if(key === show_index) {
        _cards[key] = true;
      } else {
        _cards[key] = false;
      }
      return item;
    })
    
    setCards(_cards);
  }
  return (
    <Stack
      direction={isDesktop ? 'row' : 'column'}
      id="content-pass-invest"
      width={{ md: '90%', xs: '90%' }}
      margin="auto"
      paddingY="80px"
      display="flex"
      justifyContent="center"
    >
      <Stack spacing={2}>
        <Grid
          container
          sx={{
            backgroundColor: '#141a36',
            border: '2px solid grey',
            color: '#fff',
            borderRadius: '20px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#fff',
            backgroundImage: 'linear-gradient(180deg, #ffffff4c, #ffffff00)',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingY: '10px',
          }}
        >
          <Box display="flex" alignItems="center" p={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#141a36',
                fontSize: '32px',
                fontWeight: '700',
                paddingX: '50px',
                paddingY: '10px',
                borderRadius: '16px',
                textTransform: 'capitalize',
              }}
            >
              Quant Invest
            </Button>
          </Box>
          <Box
            component="img"
            sx={{
              padding: '16px',
            }}
            alt="The house from the offer."
            src={img_contrast}
          />
        </Grid>

        <Grid container display="flex" justifyContent="center" textAlign="center">
          <Typography color="#fff" fontSize="28px" fontWeight="700">
            Our Streamlined Investment Solution
          </Typography>
          <Typography color="#a2a5b8" lineHeight="29px">
            Quant Invest is a cutting-edge automated and optimized crypto investment solution that
            utilizes our custom-designed quantitative algorithm 24/7. With this innovative
            technology, you can enjoy the benefits of crypto investment without the hassle of manual
            monitoring and effort. Our algorithm constantly analyzes the market trends, identifies
            long-term opportunities and optimizes your portfolio.
          </Typography>
        </Grid>

        <Stack spacing={2}>
          <Stack direction={isDesktop ? 'row' : 'column'} spacing={2} justifyContent="space-around">
            <Grid container>
              <Grid item md={4} xs={12} paddingRight="10px">
                <Typography
                  variant="h5"
                  sx={{
                    color: '#fff',
                    fontSize: '24px',
                    textTransform: 'capitalize',
                    fontWeight: '700',
                    letterSpacing: '0.43px',
                    borderBottom: '1px solid #ffffff19',
                    padding: '20px',
                    backgroundColor: '#1D233D',
                  }}
                >
                  Strategy
                </Typography>
                <Stack
                  color="#a2a5b8"
                  display="flex"
                  alignItems="center"
                  paddingY={5}
                  spacing={10}
                  sx={{
                    backgroundImage: "url('assets/images/img_group_1825.png')",
                    backgroundPositionX: 'left',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#1C223C',
                  }}
                >
                  <Typography paddingX="40px" lineHeight="29px">
                    Our trend-following strategy is designed to capitalize on market upswings and
                    protect your capital during downturns. Emphasizing quality over quantity, our
                    algorithm executes an average of 40 orders per year.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      border: '1px solid #a2a5b8',
                      borderRadius: '16px',
                      color: 'rgb(51, 217, 125)',
                      paddingY: '20px',
                      fontSize: '25px',
                      fontWeight: '500',
                      textTransform: 'capitalize',
                      backgroundColor: '#272f4c',
                      width: '70%',
                      height: '80px',
                      position: 'relative',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'rgb(51, 217, 125)',
                        fontSize: '25px',
                        fontWeight: '500',
                        textTransform: 'capitalize',
                        position: 'absolute',
                        bottom: '70px',
                      }}
                      ref={strategyTextsRef}
                    >
                      Transparent
                    </Typography>
                  </Button>
                  <Box>
                    <Typography color="#fff" fontSize="1rem">
                      Want to know more about our performance?
                    </Typography>
                    <Typography color="lightgray" fontSize="16px">
                      Download our detailed report
                    </Typography>
                    <FormControl sx={{ backgroundColor: '#272f4c' }}>
                      <OutlinedInput placeholder="Your Email Address" sx={{ color: '#a2a5b8' }} />
                    </FormControl>
                    <Button
                      sx={{
                        backgroundColor: '#fbb532',
                        color: 'white',
                        height: '56px',
                        fontSize: '16px',
                        fontWeight: '700',
                        borderRadius: '5px',
                        letterSpacing: '0.02857em',
                        padding: '20px',
                        textTransform: 'capitalize',
                      }}
                    >
                      Receive
                    </Button>
                  </Box>
                </Stack>
              </Grid>
              <Grid item md={8} xs={12} sx={{ backgroundColor: '#1C223C' }} position="relative">
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#fff',
                      fontSize: '24px',
                      textTransform: 'capitalize',
                      fontWeight: '700',
                      letterSpacing: '0.43px',
                      borderBottom: '1px solid #ffffff19',
                      padding: '20px',
                      backgroundColor: '#1D233D',
                    }}
                  >
                    Quant Invest Performance Since 2017
                  </Typography>
                </Box>
                <Box
                  width="18%"
                  color="#fff"
                  display="flex"
                  justifyContent="space-between"
                  fontSize="14.14px"
                  position="absolute"
                  top="20%"
                  right="5%"
                >
                  <Typography width="5%">SCALE IN</Typography>
                  <Typography>BTC</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginX="60px"
                  marginY="30px"
                  gap={2}
                >
                  <Box>
                    <Stack spacing={10} display="flex" justifyContent="space-between">
                      <Typography
                        letterSpacing="0.5px"
                        fontSize="14.14px"
                        alignSelf="center"
                        color="#fff"
                      >
                        6.000
                      </Typography>
                      <Typography
                        letterSpacing="0.5px"
                        fontSize="14.14px"
                        alignSelf="center"
                        color="#fff"
                      >
                        5.000
                      </Typography>
                      <Typography
                        letterSpacing="0.5px"
                        fontSize="14.14px"
                        alignSelf="center"
                        color="#fff"
                      >
                        4.000
                      </Typography>
                      <Typography
                        letterSpacing="0.5px"
                        fontSize="14.14px"
                        alignSelf="center"
                        color="#fff"
                      >
                        3.000
                      </Typography>
                      <Typography
                        letterSpacing="0.5px"
                        fontSize="14.14px"
                        alignSelf="center"
                        color="#fff"
                      >
                        2.000
                      </Typography>
                    </Stack>
                  </Box>
                  <Box position="relative">
                    <Box component="img" src={img_grid_base} />
                    <Box
                      component="img"
                      position="absolute"
                      bottom="18%"
                      left="0px"
                      src={img_path_0_185x1058}
                    />
                    <Box
                      component="img"
                      position="absolute"
                      bottom="20%"
                      left="0px"
                      src={img_path_1_224x1058}
                    />
                    <Box
                      component="img"
                      position="absolute"
                      top="13%"
                      left="0px"
                      src={img_path_3_304x1057}
                    />
                  </Box>
                </Box>
                {isDesktop && (
                  <Box marginX="90px" marginY="25px" display="flex" justifyContent="space-between">
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      10:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      11:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      12:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      1:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      2:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      3:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      4:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      5:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      6:59PM
                    </Typography>
                    <Typography
                      letterSpacing="0.5px"
                      fontSize="14.14px"
                      alignSelf="center"
                      color="#fff"
                    >
                      7:59PM
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Stack>

          <Grid container>
            <Stack
              sx={{
                width: '100%',
                spacing: 5,
                backgroundColor: '#1C223C',
                borderRadius: '16px',
                paddingY: '40px',
                paddingX: '20px'
              }}
            >
              <Grid container item display="flex" justifyContent="center">
                <Typography color="#fff" fontSize="24px" fontWeight="700">
                  Delegate Your Digital Asset Management Easily
                </Typography>
              </Grid>
              <Grid container onMouseEnter={handleSlide} onMouseLeave={leaveSlide}>
                <Grid container spacing={4} padding='20px' position="relative">
                  <Grid 
                    item 
                    md={4} 
                    ref={slide1} 
                    style={{display: cards[0] || window.innerWidth >= 768? 'block':'none'}} 
                    onClick={() => {showCardInMobile(0)}}>
                    <Stack
                      sx={{
                        backgroundColor: '#272f4c',
                        spacing: 2,
                        borderRadius: '16px',
                        paddingBottom: '40px',
                        paddingLeft: '40px',
                        paddingRight: '16px',
                        paddingTop: '16px',
                      }}
                    >
                      <Typography
                        fontSize="32px"
                        fontWeight="700"
                        letterSpacing="0.43px"
                        textAlign="right"
                        color="#FBB532"
                      >
                        01
                      </Typography>
                      <Typography
                        fontSize="24px"
                        fontWeight="700"
                        letterSpacing="0.43px"
                        color="#fff"
                      >
                        Sign Up
                      </Typography>
                      <Typography lineHeight="29px" color="#a2a5b8">
                        Create your account & deposit USDT on your preferred centralized exchange
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid 
                    item 
                    md={4} 
                    ref={slide2} 
                    position={window.innerWidth > 768 ? 'absolute':'relative'} 
                    style={{display: cards[1] || window.innerWidth >= 768? 'block':'none'}} 
                    onClick={() => {showCardInMobile(1)}}
                  >
                    <Stack
                      sx={{
                        backgroundColor: '#272f4c',
                        spacing: 2,
                        borderRadius: '16px',
                        paddingBottom: '40px',
                        paddingLeft: '40px',
                        paddingRight: '16px',
                        paddingTop: '16px',
                      }}
                    >
                      <Typography
                        fontSize="32px"
                        fontWeight="700"
                        letterSpacing="0.43px"
                        textAlign="right"
                        color="#FBB532"
                      >
                        02
                      </Typography>
                      <Typography
                        fontSize="24px"
                        fontWeight="700"
                        letterSpacing="0.43px"
                        color="#fff"
                      >
                        Connect Your CEX
                      </Typography>
                      <Typography lineHeight="29px" color="#a2a5b8">
                        Link your exchange account to our automated strategy via secured API
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid 
                      item 
                      md={4} 
                      ref={slide3} 
                      position={window.innerWidth > 768 ? 'absolute':'relative'} 
                      style={{display: cards[2] || window.innerWidth >= 768? 'block':'none'}} 
                      onClick={()=>{showCardInMobile(2)}}
                    >
                    <Stack
                      sx={{
                        backgroundColor: '#272f4c',
                        spacing: 2,
                        borderRadius: '16px',
                        paddingBottom: '40px',
                        paddingLeft: '40px',
                        paddingRight: '16px',
                        paddingTop: '16px',
                      }}
                    >
                      <Typography
                        fontSize="32px"
                        fontWeight="700"
                        letterSpacing="0.43px"
                        textAlign="right"
                        color="#FBB532"
                      >
                        03
                      </Typography>
                      <Typography
                        fontSize="24px"
                        fontWeight="700"
                        letterSpacing="0.43px"
                        color="#fff"
                      >
                        Start Investing
                      </Typography>
                      <Typography lineHeight="29px" color="#a2a5b8">
                        Let our Quantitative algorithm make the best investment decisions for you!
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
              backgroundColor: '#1C223C',
              borderRadius: '16px',
            }}
          >
            <Grid item>
              <Box component="img" src={img_close_blue_gray_600} width="25px" height="25px" />
              <Box component="img" height="24px" src={img_path16} />
            </Grid>
            <Grid item>
              <Box component="img" src={img_vector} height="34px" />
            </Grid>
            <Grid item>
              <Box component="img" src={img_settings} height="23px" />
              <Box component="img" height="23px" src={img_vector_blue_gray_600} />
            </Grid>
            <Grid item>
              <Box component="img" src={img_user_blue_gray_600} height="27px" />
              <Box component="img" height="27px" src={img_group_1000003266} />
            </Grid>
            <Grid item>
              <Box component="img" src={img_g886} height="29px" />
            </Grid>
            <Grid item>
              <Box component="img" src={img_settings_blue_gray_600} height="32px" />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              backgroundImage: "url('images/img_partenrs_bg_png.png')",
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1C223C',
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <Typography
              color="#fff"
              fontSize="28px"
              fontWeight="400"
              width="100%"
              textAlign="center"
            >
              This exclusive opportunity targets&nbsp;passive investors&nbsp;demanding&nbsp;zero
              time working, as everything is automated
            </Typography>
            <Button
              sx={{
                backgroundColor: '#02A53E',
                color: 'white',
                height: '56px',
                fontWeight: '700',
                form: 'capitalize',
              }}
            >
              DETAILS & PRICE
            </Button>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default QuantInvest;
