import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";

const Tip1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Cooking Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Read the recipe well</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Always read the entire recipe carefully.
          </IonCardContent>
        </IonCard>
        <Link to="/tip2">
          <IonButton>Next Tip</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Tip1;
