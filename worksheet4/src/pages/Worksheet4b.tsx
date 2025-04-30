import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  // Other Components
  IonBadge,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonToast,
} from "@ionic/react";

const Worksheet4b: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Toast and Badges</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="openToast" expand="block">
          OPEN
        </IonButton>
        <IonText>
          This toast example uses triggers to automatically open a toast when
          the button is clicked.
        </IonText>
        <IonList>
          <IonItem>
            <IonLabel>Followers</IonLabel>
            <IonBadge slot="end" color="primary">
              22K
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Likes</IonLabel>
            <IonBadge slot="end" style={{ backgroundColor: "#50c8ff" }}>
              118K
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Stars</IonLabel>
            <IonBadge slot="end" color="tertiary">
              34K
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Completed</IonLabel>
            <IonBadge slot="end" color="success">
              80
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Warnings</IonLabel>
            <IonBadge slot="end" color="warning">
              70
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Notifications</IonLabel>
            <IonBadge slot="end" color="danger">
              1000
            </IonBadge>
          </IonItem>
        </IonList>
        <IonToast
          trigger="openToast"
          message="This toast will disappear after 5 seconds"
          duration={5000}
        ></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Worksheet4b;
