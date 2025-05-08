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

const Tip2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Recycling Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Use quality ingredients</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Good quality salt, for example, can significantly enhance the taste
            of your dish.
          </IonCardContent>
        </IonCard>
        <Link to="/tip1">
          <IonButton>Previous Tip</IonButton>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Tip2;
