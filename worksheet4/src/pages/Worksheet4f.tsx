import {
  IonContent,
  IonPage,
  // Other Components
  IonLabel,
  IonRange,
} from "@ionic/react";

const Worksheet4f: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonRange min={0} max={100} step={1} pin={true}>
          <IonLabel slot="start">0</IonLabel>
          <IonLabel slot="end">100</IonLabel>
        </IonRange>
      </IonContent>
    </IonPage>
  );
};

export default Worksheet4f;
