import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import marvel from '../assets/marvel.png'
import "./Menu.css"

const Register: React.FC = () => {
    const router = useIonRouter();

    const doRegister = (event: any) => {
        event.preventDefault();
        console.log('doRegister')
        router.goBack();
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
        <IonBackButton defaultHref='/'></IonBackButton>
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className='ion-text-center ion-padding content'>
                <img src={marvel} alt='marver-logo' width={'60%'} />
                </div>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister} >
                        <IonInput fill='outline' labelPlacement='floating' label="Name" type='text' placeholder='Name' required></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label="Email" type='email' placeholder='example@gmail.com' required></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label="Password" type='password' placeholder='password' required></IonInput>
                            <IonButton type='submit' expand='full' className='ion-margin-top'>
                                Create my Account
                                <IonIcon icon={checkmarkDoneOutline} slot="end">
                                </IonIcon>
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Register;