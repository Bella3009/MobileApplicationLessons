import {
  IonContent,
  IonPage,
  // Other Components
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";

const Worksheet4d: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonSegment value="Default">
          <IonSegmentButton value="Segment 1">
            <IonLabel>Segment 1</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Segment 2">
            <IonLabel>Segment 2</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

export default Worksheet4d;
