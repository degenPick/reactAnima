import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { gsap } from 'gsap';

import { useGSAP } from '@gsap/react';

import MainContent from './main/main_content';
import AboutUsContent from './main/about_us_content';
import Faq from './main/faq';
import ContactUs from './main/contact_us';
import ScrollButton from './main/scroll_but';

import QuantInvest from './main/quant_invest';
import PrivateClub from './main/private_club';
import Testimonial from './main/testimonial';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export default function Home() {
  return (
    <>
      <MainContent />
      <AboutUsContent />
      <QuantInvest />
      <PrivateClub />
      <Faq />
      <ContactUs />
      <Testimonial />
      <ScrollButton />
    </>
  );
}
