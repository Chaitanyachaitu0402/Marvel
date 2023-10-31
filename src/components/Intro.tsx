import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import ironman from '../assets/ironman.jpg'
import captain from '../assets/captain.jpg'
import hulk from '../assets/hulk.jpg'
import loki from '../assets/loki.png'
import thor from '../assets/thor.jpg'
import natasha from '../assets/natasha.jpg'
import marvel from '../assets/marvel.png'
import './Intro.css';

interface ContainerProps {
    onFinish: () => void;
  }

  const SwiperButtonNext = ({ children }: any) => {
    const swiper = useSwiper();
    return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
  };

const Intro: React.FC <ContainerProps> = ({ onFinish }) => {

    return (
        <Swiper>
      <SwiperSlide className='bg1'>
        
      
        <IonText color={'dark'}>
          <h3>Unlock the Marvel Universe's epic adventures in one app and dive into the vast collection of comics!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide className='bg2'>
        
        <IonText color={'dark'}>
          <h3>Embark on an exhilarating journey through the Marvel multiverse, where all comics unite in a single, must-have mobile app.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide className='bg3'>
        
        <IonText color={'dark'}>
          <h3>Access the complete Marvel saga at your fingertips - immerse yourself in an infinite universe of comics, all within one powerful app.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide className='bg4'>
        
        <IonText color={'dark'}>
          <h3>Discover the ultimate gateway to Marvel's comic realm with our app, offering an unparalleled assortment of superhero stories and epic battles.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide className='bg5'>
        
        <IonText color={'dark'}>
          <h3>Unleash the full force of Marvel's storytelling prowess on your device, gathering every legendary comic ever created into a single, awe-inspiring app.</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide className='bg6'>
        
        <IonText color={'dark'}>
          <h3>Hold the entire Marvel comics cosmos in your hands; a marvel-ous app awaits, granting you access to countless tales of heroism and excitement.</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
    );
};

export default Intro;