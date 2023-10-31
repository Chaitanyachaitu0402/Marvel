import React, { useRef } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
import "./Menu.css"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.jpg"
import c7 from "../assets/c7.jpg"

function Example() {
  return (
    <>
    <div className='page'>
    <IonHeader>
      <IonToolbar className='header' color={'primary'}>
        <IonTitle>
          Explore the Comics
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonCard className='card'>
      <img src={c1} alt="" />
       <IonCardHeader>
        <IonCardTitle color={'dark'}>The Immortal Hulk by Al Ewing and Joe Bennett</IonCardTitle>
        <IonCardSubtitle>Marvel</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>This critically acclaimed series follows Bruce Banner as he tries to control his Hulk persona, while also dealing with the threat of the mysterious One Below All.</IonCardContent>
      <IonButton className='button' href='https://read.marvel.com/#/book/48246'>Watch Now</IonButton>
    </IonCard>
    <IonCard className='card'>
    <img src={c2} alt="" />
       <IonCardHeader>
        <IonCardTitle color={'dark'}>X-Men Red by Al Ewing and Stefano Caselli</IonCardTitle>
        <IonCardSubtitle>Marvel</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent> This series sees Magneto return to lead a new team of X-Men on the planet Arakko.</IonCardContent>
      <IonButton href='https://www.marvel.com/comics/collection/96795/x-men_red_by_al_ewing_vol_1_trade_paperback'>Watch Now</IonButton>
    </IonCard>
    <IonCard className='card'>
    <img src={c3} alt="" />
       <IonCardHeader>
        <IonCardTitle color={'dark'}>A.X.E.: Judgment Day by Kieron Gillen and Valerio Schiti</IonCardTitle>
        <IonCardSubtitle>Marvel</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>This upcoming event sees the Avengers, X-Men, and Eternals go to war with each other.</IonCardContent>
      <IonButton href='https://www.marvel.com/comics/issue/100366/axe_judgment_day_2022_1'>Watch Now</IonButton>
    </IonCard>
    <IonCard className='card'>
    <img src={c4} alt="" />
       <IonCardHeader>
        <IonCardTitle color={'dark'}>The Avengers by Stan Lee and Jack Kirby</IonCardTitle>
        <IonCardSubtitle>Marvel</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent> This team-up series brought together some of Marvel's greatest heroes and has been one of the most popular comics of all time.</IonCardContent>
      <IonButton href='https://www.marvel.com/comics/issue/6951/avengers_1963_1'>Watch Now</IonButton>
    </IonCard>
    <IonCard className='card'>
    <img src={c5} alt="" />
       <IonCardHeader>
        <IonCardTitle color={'dark'}>Thor: God of Thunder by Jason Aaron and Esad Ribic</IonCardTitle>
        <IonCardSubtitle>Marvel</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent> This series follows Thor as he battles gods, monsters, and other threats from across the universe.</IonCardContent>
      <IonButton href='https://www.marvel.com/comics/collection/46498/thor_god_of_thunder_vol_1_-_the_god_butcher_trade_paperback'>Watch Now</IonButton>
    </IonCard>
    <IonCard className='card'>
    <img src={c6} alt="" />
       <IonCardHeader>
        <IonCardTitle color={'dark'}>Ms. Marvel by G. Willow Wilson and Adrian Alphona</IonCardTitle>
        <IonCardSubtitle>Marvel</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>This series tells the story of Kamala Khan, a Muslim teenager who gains superpowers and becomes the new Ms. Marvel.</IonCardContent>
      <IonButton href='https://www.marvel.com/comics/collection/92769/ms_marvel_marvel_tales_trade_paperback'>Watch Now</IonButton>
    </IonCard>
    <IonCard className='card'>
    <img src={c7} alt="" />
       <IonCardHeader>
        <IonCardTitle color={'dark'}>Venom by Donny Cates and Ryan Stegman</IonCardTitle>
        <IonCardSubtitle>Marvel</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>This series follows Venom as he becomes the new King in Black.</IonCardContent>
      <IonButton href='https://www.marvel.com/comics/collection/70022/venom_by_donny_cates_vol_1_rex_trade_paperback'>Watch Now</IonButton>
    </IonCard>
    
    </div>
    
    </>
    
  );
}
export default Example;