import {
  IonContent,
  IonPage,
  // Other Components
  IonItem,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonLabel,
} from "@ionic/react";

const Worksheet4e: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonItemSliding>
          <IonItemOptions side="start">
            <IonItemOption color="danger">Delete</IonItemOption>
          </IonItemOptions>
          <IonItem>
            <IonLabel>Slide me left or right</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="danger">Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonContent>
    </IonPage>
  );
};

export default Worksheet4e;
