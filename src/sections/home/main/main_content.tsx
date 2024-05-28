import { useEffect, useRef } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useI18nContext } from '../../../i18n/i18n-react';

import img_group from '../../../assets/images/img_group.png';
import img_contrast from '../../../assets/images/img_contrast.svg';
import img_group_1821 from '../../../assets/images/img_group_1821.svg';
import Frame1825 from '../../../assets/images/Frame1825.png';

import useResponsive from '../../../hooks/useResponsive';

const MainContent = () => {
  const { LL } = useI18nContext();
  const isDesktop = useResponsive('up', 'sm');
  const mainTextRef = useRef(null);
  const texts: string[] = ['Make Money', 'Save Time'];
  const currentIndex = 0;

  const slide1_1 = useRef(null);
  const slide1_2 = useRef(null);
  const slide1_3 = useRef(null);

  const animateText = (textArray: string[], textIndex: number, textRef: any) => {
    if (!textRef.current) return;
    gsap.to(textRef.current, {
      y: 50,
      duration: 1,
      opacity: 1,
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
              animateText(textArray, textIndex, textRef);
            },
          });
        }, 500);
      },
    });
  };

  useEffect(() => {
    animateText(texts, currentIndex, mainTextRef);
  });

  const mouseenter1 = () => {
    const tl = gsap.timeline({
      delay: 0.1,
      defaults: { ease: "power2.inOut" } // Apply an easing function by default to all tweens
    });
    
    tl.add('start1')
      .to('.slide1_1', { width: '70%', duration: 0.6 }, 'start1')
      .to('.slide1_2', { width: '15%', duration: 0.6 }, 'start1+=0.1') // Staggered start for smoothness
      .to('.slide1_3', { width: '15%', duration: 0.6 }, 'start1+=0.1') // Same here for consistency
      // Use autoAlpha for a smoother visibility and opacity transition
      .to('.slide1_1_block', { autoAlpha: 0 }, 'start1')
      .to('.slide1_1_block', { height: '0px' }, 'start1')
      
      .to('.slide1_1_none', { autoAlpha: 1 }, 'start1+=0.2')
      .to('.slide1_1_none', { height: '500px' }, 'start1+=0.2')
      
      .to('.slide1_2_block', { autoAlpha: 0 }, 'start1')
      .to('.slide1_2_block', { height: '0px' }, 'start1')
      
      .to('.slide1_2_none', { autoAlpha: 1 }, 'start1+=0.2')
      .to('.slide1_2_none', { height: '500px' }, 'start1+=0.2')

  };

  const mouseout1 = () => {
    const tl = gsap.timeline({ delay: 0.1, defaults: { ease: "power2.inOut" } });

    tl.add('start2')
      .to('.slide1_1', { width: '15%', duration: 0.5 }, 'start2')
      .to('.slide1_2', { width: '70%', duration: 0.5 }, 'start2+=0.1') // Slight offset for a smoother transition
      .to('.slide1_3', { width: '15%', duration: 0.5 }, 'start2+=0.1')
      // Change display to autoAlpha to animate both opacity and visibility
      .to('.slide1_1_block', { autoAlpha: 1 }, 'start2')
      .to('.slide1_1_block', { height: '500px' }, 'start2')
      
      .to('.slide1_1_none', { autoAlpha: 0 }, 'start2+=0.1')
      .to('.slide1_1_none', { height: '0px' }, 'start2+=0.1')
      
      .to('.slide1_2_block', { autoAlpha: 1 }, 'start2')
      .to('.slide1_2_block', { height: '500px' }, 'start2')

      .to('.slide1_2_none', { autoAlpha: 0 }, 'start2+=0.1')
      .to('.slide1_2_none', { height: '0px' }, 'start2+=0.1')
    };
  
  const mouseenter2 = () => {
    const tl = gsap.timeline({ delay: 0.1, defaults: { duration: 0.5, ease: "power1.inOut" }});

    tl.add('start3')
      .to('.slide1_1', { width: '15%' }, 'start3')
      .to('.slide1_2', { width: '15%' }, 'start3')
      .to('.slide1_3', { width: '70%' }, 'start3')
      // Replace display with autoAlpha for smooth fading transitions
      .to('.slide1_3_block', { autoAlpha: 0 }, 'start3')
      .to('.slide1_3_block', { height: '0px' }, 'start3')

      .to('.slide1_3_none', { autoAlpha: 1 }, 'start3+=0.1') // Slight delay for emphasis
      .to('.slide1_3_none', { height: '500px' }, 'start3+=0.1')

      .to('.slide1_2_block', { autoAlpha: 0 }, 'start3')
      .to('.slide1_2_block', { height: '0px' }, 'start3')
      
      .to('.slide1_2_none', { autoAlpha: 1 }, 'start3+=0.1')
      .to('.slide1_2_none', { height: '500px' }, 'start3+=0.1')
  };

  const mouseout2 = () => {
    const tl = gsap.timeline({ delay: 0.1, defaults: { duration: 0.5, ease: "power1.inOut" }});

    tl.add('start4')
      .to('.slide1_1', { width: '15%' }, 'start4')
      .to('.slide1_2', { width: '70%' }, 'start4')
      .to('.slide1_3', { width: '15%' }, 'start4')
      // Using autoAlpha instead of display for smoother transitions
      .to('.slide1_3_block', { autoAlpha: 1 }, 'start4')
      .to('.slide1_3_block', { height: '500px' }, 'start4')

      .to('.slide1_3_none', { autoAlpha: 0 }, 'start4+=0.1') // Slight delay for smoother hide effect
      .to('.slide1_3_none', { height: '0px' }, 'start4+=0.1')
      
      .to('.slide1_2_block', { autoAlpha: 1 }, 'start4')
      .to('.slide1_2_block', { height: '500px' }, 'start4')
      
      .to('.slide1_2_none', { autoAlpha: 0 }, 'start4+=0.1')
      .to('.slide1_2_none', { height: 0 }, 'start4+=0.1')
  };

  return (
    <Box color="white" mt={8} id="main">
      <Stack
        direction={isDesktop ? 'row' : 'column'}
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack
          width={isDesktop ? '15%' : '100%'}
          className="slide1_1"
          ref={slide1_1}
          onMouseEnter={mouseenter1}
          onMouseLeave={mouseout1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '600px',
            backgroundColor: 'rgba(34,41,69,255)',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
          }}
        >
          <Grid
            container
            className='slide1_1_block'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  rotate: '180deg',
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Quant Invest
              </Typography>
            </Grid>
            <Grid item>
              <Stack spacing={4} className="image_gallery">
                {[...Array(4)].map((_, index) => (
                  <Box
                    key={index}
                    component="img"
                    sx={{
                      height: 60,
                      width: 60,
                      borderRadius: 47,
                      padding: '17px',
                      backgroundColor: '#141a36',
                    }}
                    alt="The house from the offer."
                    src={img_group}
                  />
                ))}
              </Stack>
            </Grid>            
          </Grid>
          <Grid
            container
            className='slide1_1_none'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              visibility: "hidden",
              opacity: 0,
              height: '0px'
            }}
          >
            <Grid 
              item 
              md={5} 
            >
              <Stack>
                <Grid container display="flex" justifyContent="center">
                  {[...Array(4)].map((_, index) => (
                    <Box
                      key={index}
                      component="img"
                      sx={{
                        height: 60,
                        width: 60,
                        borderRadius: 47,
                        padding: '17px',
                        margin: '15px',
                        backgroundColor: '#141a36',
                      }}
                      alt="The house from the offer."
                      src={img_group}
                    />
                  ))}
                </Grid>
                <Typography color="#fff" fontSize={52} fontWeight="bold" paddingX={5}>
                  Quant Invest
                </Typography>
                <Typography color="#5C6BC0" fontSize={42} fontWeight="bold" paddingX={5}>
                  Diversify Wealth
                </Typography>
                <Typography color="#BBBDC6" fontSize={28} fontWeight="bold" paddingX={5}>
                  Simplify, Automate & Optimise your Crypto Currency Investments!
                </Typography>
              </Stack>
            </Grid>
            <Grid 
              item 
              md={7}
            >
              <Box component="img" alt="The house from the offer." src={Frame1825} />
            </Grid>
          </Grid>
        </Stack>
        <Stack 
          width={isDesktop ? '70%' : '100%'} 
          className="slide1_2" 
          ref={slide1_2}
          sx={{
            backgroundColor: 'rgba(34,41,69,255)',
            borderRadius: '40px',
            paddingX: '20px',
            height: '600px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack
            spacing={2}
            alignItems="center"
            display= 'flex'
            sx={{ 
              visibility: "hidden",
              opacity: 0,
              height: '0px'
            }}
            className="slide1_2_none"
          >
            <Box
              component="img"
              width="82px"
              height="82px"
              alt="The house from the offer."
              src={img_contrast}
            />
            <Typography color="#fff" fontSize="32px" fontWeight="bold" paddingBottom="50px">
              Scale In
            </Typography>
          </Stack>
          <Grid
            container
            className="slide1_2_block"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid
              item
              md={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Stack spacing={2}>
                <Box
                  component="img"
                  sx={{
                    width: '82px',
                    height: '82px',
                  }}
                  alt="The house from the offer."
                  src={img_contrast}
                />

                <Typography
                  variant="h2"
                  sx={{ color: '#fff', fontWeight: '700', paddingBottom: '50px' }}
                  className="fadeSlideFromTo"
                  ref={mainTextRef}
                >
                  Make Money
                </Typography>

                <Typography variant="h3" sx={{ color: '#fff' }}>
                  Join us to build your financial success story
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              md={7}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box component="img" src={img_group_1821} />
            </Grid>
          </Grid>
        </Stack>
        <Stack
          width={isDesktop ? '15%' : '100%'}
          className="slide1_3"
          ref={slide1_3}
          onMouseEnter={mouseenter2}
          onMouseLeave={mouseout2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '600px',
            backgroundColor: 'rgba(34,41,69,255)',
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
          }}
        >
          <Grid
            container
            className="slide1_3_none"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              visibility: "hidden",
              opacity: 0,
              height: 0
            }}
          >
            <Grid 
              item 
              md={5} 
            >
              <Stack>
                <Grid container display="flex" justifyContent="center">
                  {[...Array(4)].map((_, index) => (
                    <Box
                      key={index}
                      component="img"
                      sx={{
                        height: 60,
                        width: 60,
                        borderRadius: 47,
                        padding: '17px',
                        margin: '15px',
                        backgroundColor: '#141a36',
                      }}
                      alt="The house from the offer."
                      src={img_group}
                    />
                  ))}
                </Grid>
                <Typography color="#fff" fontSize={52} fontWeight="bold" paddingX={5}>
                  Quant Invest
                </Typography>
                <Typography color="#5C6BC0" fontSize={42} fontWeight="bold" paddingX={5}>
                  Diversify Wealth
                </Typography>
                <Typography color="#BBBDC6" fontSize={28} fontWeight="bold" paddingX={5}>
                  Simplify, Automate & Optimise your Crypto Currency Investments!
                </Typography>
              </Stack>
            </Grid>
            <Grid 
              item 
              md={7}
            >
              <Box component="img" alt="The house from the offer." src={Frame1825} />
            </Grid>
          </Grid>
          <Grid
            container
            className="slide1_3_block"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid item>
              <Stack spacing={4}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                    width: 60,
                    borderRadius: 47,
                    padding: '17px',
                    backgroundColor: '#141a36',
                  }}
                  alt="The house from the offer."
                  src={img_group}
                />
              </Stack>
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  rotate: '180deg',
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                Private Club
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MainContent;
