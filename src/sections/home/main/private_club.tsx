import React, { useEffect, useRef } from 'react';
import { Box, Button, FormControl, Grid, OutlinedInput, Stack, Typography } from '@mui/material';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

import { useI18nContext } from '../../../i18n/i18n-react';
import useResponsive from '../../../hooks/useResponsive';

import bitcoin from '../../../assets/images/bitcoin.png';
import img_contrast from '../../../assets/images/img_contrast.svg';

const PrivateClub = () => {
  gsap.registerPlugin(Flip);
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');

  const strategyTextsRef = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);

  const strategyTexts = ['Diversity', 'Lean', 'Multiply', 'Prosper'];
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

  const animateCoin = () => {
    gsap.to('.logo-container', {
      duration: 3,
      x: 1000,
      ease: 'power1.inOut',
      stagger: 0.1,
      onComplete: () => {
        gsap.to('.logo-container', {
          x: -1000,
          duration: 3,
          ease: 'power1.inOut',
          delay: 2,
          stagger: 0.1,
          onComplete: () => {
            setTimeout(() => {
              animateCoin();
            }, 500);
          },
        });
      },
    });
  };

  useEffect(() => {
    animateText(strategyTexts, strategyCurrentIndex, strategyTextsRef, strategyTextColors);
    animateCoin();
  });

  const handleSlide = () => {
    gsap.to(slide3.current, {
      x: (window.innerWidth * 1.97) / 7,
      duration: 1,
      onComplete: () => {
        gsap.to(slide2.current, {
          x: (window.innerWidth * 1.97) / 7,
          duration: 1,
        });
        gsap.to(slide3.current, {
          x: (window.innerWidth * 3.98) / 7,
          duration: 1,
        });
      },
    });
  };

  return (
    <Stack
      direction={isDesktop ? 'row' : 'column'}
      margin="auto"
      paddingY="80px"
      id="content-private-club"
      sx={{ backgroundColor: '#1C223C' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack spacing={2} width={{ md: '90%', xs: '90%' }}>
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
              private club
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
            Team up with us to shape your financial prosperity
          </Typography>
          <Typography color="#a2a5b8" lineHeight="29px">
            Our exclusive private club has been operating since 2017. It offers a thrilling
            experience for finance 2.0 enthusiasts. By joining us, you participate in a dynamic
            investor community for discussions, insights, and web3 collaborations. You also benefit
            from early investment opportunities, engaging in various fundraising campaigns,
            including ICOs, IDOs, Seed and Private rounds.
          </Typography>
        </Grid>

        <Grid container>
          <Grid item md={8} xs={12} sx={{ backgroundColor: '#141a36' }} paddingRight="10px">
            <Box>
              <Typography
                variant="h5"
                color="#fff"
                fontSize="24px"
                textTransform="capitalize"
                fontWeight="700"
                letterSpacing="0.43px"
                borderBottom="1px solid #ffffff19"
                padding="20px"
              >
                Gains from our club since 2017
              </Typography>
            </Box>
            <Box className="sliding-logo-wrapper" sx={{ display: 'flex', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#232942',
                  width: '20%',
                  borderRadius: '50px',
                  padding: '20px',
                  margin: '20px',
                }}
                className="logo-container marquee"
              >
                <Box component="img" src={bitcoin} />

                <Typography fontSize="22px" fontWeight="bold" color="#fff">
                  Bitcoin
                </Typography>

                <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                  x300
                </Typography>
              </Box>
              {isDesktop && (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
            <Box className="sliding-logo-wrapper" sx={{ display: 'flex', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#232942',
                  width: '20%',
                  borderRadius: '50px',
                  padding: '20px',
                  margin: '20px',
                }}
                className="logo-container marquee"
              >
                <Box component="img" src={bitcoin} />

                <Typography fontSize="22px" fontWeight="bold" color="#fff">
                  Bitcoin
                </Typography>

                <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                  x300
                </Typography>
              </Box>
              {isDesktop && (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
            <Box className="sliding-logo-wrapper" sx={{ display: 'flex', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#232942',
                  width: '20%',
                  borderRadius: '50px',
                  padding: '20px',
                  margin: '20px',
                }}
                className="logo-container marquee"
              >
                <Box component="img" src={bitcoin} />

                <Typography fontSize="22px" fontWeight="bold" color="#fff">
                  Bitcoin
                </Typography>

                <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                  x300
                </Typography>
              </Box>
              {isDesktop && (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
            <Box className="sliding-logo-wrapper" sx={{ display: 'flex', overflow: 'hidden' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#232942',
                  width: '20%',
                  borderRadius: '50px',
                  padding: '20px',
                  margin: '20px',
                }}
                className="logo-container marquee"
              >
                <Box component="img" src={bitcoin} />

                <Typography fontSize="22px" fontWeight="bold" color="#fff">
                  Bitcoin
                </Typography>

                <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                  x300
                </Typography>
              </Box>
              {isDesktop && (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#232942',
                      width: '20%',
                      borderRadius: '50px',
                      padding: '20px',
                      margin: '20px',
                    }}
                    className="logo-container marquee"
                  >
                    <Box component="img" src={bitcoin} />

                    <Typography fontSize="22px" fontWeight="bold" color="#fff">
                      Bitcoin
                    </Typography>

                    <Typography color="#10CB6C" fontSize="32px" fontWeight="bold">
                      x300
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
          <Grid item md={4} xs={12} sx={{ backgroundColor: '#141a36' }}>
            <Typography
              variant="h5"
              color="#fff"
              fontSize="24px"
              textTransform="capitalize"
              fontWeight="700"
              letterSpacing="0.43px"
              borderBottom="1px solid #ffffff19"
              padding="20px"
            >
              Strategy
            </Typography>
            <Stack
              spacing={9}
              color="#a2a5b8"
              display="flex"
              alignItems="center"
              position="relative"
              margin="auto"
              padding="40px"
            >
              <Typography paddingX="40px" lineHeight="29px">
                Explore our meticulously crafted investment plans and strategies. Mirror our
                positions and gain access to exclusive insights that drive success. Elevate your
                investment game with real-time, expert guidance to maximize your returns
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
                  Diversify
                </Typography>
              </Button>
              <Box>
                <Typography color="#fff" fontSize="1rem">
                  Want to discuss with us about our club?
                </Typography>
                <Box display="flex" justifyContent="center">
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
                    Contact Me
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container>
          <Stack
            sx={{
              width: '100%',
              spacing: 5,
              borderRadius: '16px',
              paddingY: '40px',
              backgroundColor: '#141a36',
            }}
          >
            <Grid container item display="flex" justifyContent="center">
              <Typography color="#fff" fontSize="24px" fontWeight="700">
                Easy Onboarding Path
              </Typography>
            </Grid>
            <Grid container>
              <Grid container spacing={4} padding="20px" position="relative">
                <Grid item md={4}>
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
                <Grid item md={4} position="absolute" ref={slide2}>
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
                <Grid item md={4} position="absolute" ref={slide3} onMouseEnter={handleSlide}>
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
            backgroundImage: "url('images/img_partenrs_bg_png.png')",
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#141a36',
            borderRadius: '16px',
            padding: '20px',
          }}
        >
          <Typography color="#fff" fontSize="28px" fontWeight="400" width="100%" textAlign="center">
            This exclusive opportunity targetsb passive investors demanding zero time working, as
            everything is automated
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
  );
};

export default PrivateClub;
