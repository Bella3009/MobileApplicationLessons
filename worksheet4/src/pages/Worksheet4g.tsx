import {
  IonContent,
  IonPage,
  // Other Components
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

const Worksheet4g: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <img alt="picture" src="./image/600X400.png" />
          <IonCardHeader>
            <IonCardTitle>User's Name</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Brief Bio. Lopem ipsum dolor sit amet consectetur adipiscing elit.
          </IonCardContent>
          <IonButton expand="block">Reading</IonButton>
          <IonButton expand="block">Hiking</IonButton>
          <IonButton expand="block">Photography</IonButton>
        </IonCard>
        <img alt="picture" src="./image/200X50.png" />
        <br></br> {/* To divide the pictures in different lines */}
        <img alt="picture" src="./image/200X50.png" />
      </IonContent>
    </IonPage>
  );
};

export default Worksheet4g;
