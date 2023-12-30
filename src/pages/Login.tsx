import { IonButton, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';
import { eyeOffOutline } from 'ionicons/icons';
import React from 'react';
import "../input.css"

const Login: React.FC = () => {

    return (
        <IonPage>
            <IonHeader class='ion-no-border'>
                <IonToolbar>
                    <IonTitle class=''></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className=" flex center-align">
            
                <div className='grid-center h-80 w-full'>
                    <div className='w-full ion-padding'>
                        <h1 className=' ion-padding'><b>Let's get you started</b></h1>
                        <form className='flex flex-column gap-4'>
                            <IonItem className='ion-no-border'>
                                <IonInput label="First Name" labelPlacement="stacked"  type='text'>
                                </IonInput>
                            </IonItem>
                            <IonItem className='ion-no-border'>
                                <IonInput  label="Last Name" labelPlacement="stacked"  type='text' style={{ '--ion-label-font-weight': '600' }}>
                                </IonInput>
                            </IonItem>
                            <IonItem className='ion-no-border'>
                                <IonInput label="Email" labelPlacement="stacked"  type='text'>
                                </IonInput>
                            </IonItem>
                            <IonItem className='ion-no-border'>
                                <IonInput label="Password" labelPlacement="stacked" type='password'>
                                </IonInput>
                            </IonItem>
                            <IonButton type="submit" className='mt-1 ion-padding-top ion-padding-bottom'>Continue</IonButton>
                        </form>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;