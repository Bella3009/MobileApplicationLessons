import {
  IonFooter,
  IonContent,
  IonPage,
  // Other Components
  IonBadge,
  IonButton,
  IonCheckbox,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { heart } from "ionicons/icons";

const Worksheet4a: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButton expand="block">Click Me</IonButton>
        <IonButton expand="block">
          <IonIcon slot="start" icon={heart}></IonIcon>Like
        </IonButton>
        <IonInput label="Username"></IonInput>
      </IonContent>
      <IonFooter>
        <IonItem>
          <IonLabel>I agree to the terms and conditions</IonLabel>
          <IonBadge slot="end">
            <IonCheckbox slot="end" labelPlacement="start"></IonCheckbox>
          </IonBadge>
        </IonItem>
      </IonFooter>
    </IonPage>
  );
};

export default Worksheet4a;
