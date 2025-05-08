import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonIcon,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonPopover,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";

const Recipe: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Recipe of the Day</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <img src="./image/img1.jpg" />
          <IonCardHeader>
            <IonCardTitle>Pasta</IonCardTitle>
            <IonCardSubtitle>Recipe By Sara Bella Gauci</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="primary">
              <h1>415 Cal</h1>
            </IonText>
            <IonIcon id="pop" slot="end" icon={informationCircleOutline} />
            <IonPopover trigger="pop" triggerAction="click">
              <IonContent class="ion-padding">
                <h2>Calories Consumption for Sara Bella Gauci</h2>
                <p>
                  The caloric count can vary depending on the recipe and serving
                  size.
                </p>
              </IonContent>
            </IonPopover>
            <h2>Ingredients:</h2>
            <IonList>
              <IonItem>
                <IonLabel>Item</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Item</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Item</IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonLabel>Item</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Recipe;
