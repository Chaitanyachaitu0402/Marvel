import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import marvel from '../assets/marvel.png'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';
const INTRO_KEY ='intro-seen'
import "./Menu.css"
import axios from 'axios';
import './Login.css'

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(true);
    const [present, dismiss] = useIonLoading();
    
    useEffect(() => {
        const checkStorage = async () => {
          const seen = await Preferences.get({ key: INTRO_KEY });
          setIntroSeen(seen.value === 'true');
        };
        checkStorage();
      }, []);


    const doLogin = async (event: any) => {
        event.preventDefault();
        await present('Logging in...');
        setTimeout(async () => {
          dismiss();
          router.push('/app', 'root');
        }, 2000);
        router.push('/home','root');
    };

    const finishIntro = async () => {
        setIntroSeen(true);
        Preferences.set({ key: INTRO_KEY, value: 'true' });
      };

      const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key: INTRO_KEY });
      };

      // storing the data in firebase
      
        
      
        
      

    return (
        <>
        {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle >Login to watch Comics</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className='ion-text-center ion-padding content'>
                <img src={marvel} alt='marver-logo' width={'60%'} />
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doLogin} >
                            <IonInput fill='outline' labelPlacement='floating' label="Email" type='email' placeholder='example@gmail.com' required></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label="Password" type='password' placeholder='password' required></IonInput>
                            <IonButton color={'primary'} type='submit' expand='block' className='ion-margin-top'>
                                Login
                                <IonIcon icon={logInOutline} slot="end">
                                </IonIcon>
                            </IonButton>
                            <IonButton routerLink='/register' color={'primary'} type='button' expand='block' className='ion-margin-top'>
                                Create Account
                                <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
                            </IonButton>

                            <IonButton onClick={seeIntroAgain} fill="clear" size="small" color={'medium'} type="button" expand="block" className="ion-margin-top">
                          Watch intro again
                          <IonIcon icon={personCircleOutline} slot="end" />
                        </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
        )}
        </>
    );
};

export default Login;

