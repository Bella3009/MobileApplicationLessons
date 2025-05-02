import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonNavLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Destination1 from "./Destination1";
import Destination2 from "./Destination2";
import Destination3 from "./Destination3";

const DestHome: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Travel Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard color="danger">
          <img alt="pic" src="400X200.png" />
          <IonCardHeader>
            <IonCardTitle>Destination One</IonCardTitle>
            <IonCardSubtitle>
              Explore the exotic wonders of Destination One!
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonNavLink
              routerDirection="forward"
              component={() => <Destination1 />}
            >
              <IonButton color="warning">Go to Destination One</IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>
        <IonCard color="danger">
          <img alt="pic" src="400X200.png" />
          <IonCardHeader>
            <IonCardTitle>Destination Two</IonCardTitle>
            <IonCardSubtitle>
              Explore the wildlife of Destination Two!
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonNavLink
              routerDirection="forward"
              component={() => <Destination2 />}
            >
              <IonButton color="warning">Go to Destination Two</IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>
        <IonCard color="danger">
          <img alt="pic" src="400X200.png" />
          <IonCardHeader>
            <IonCardTitle>Destination Three</IonCardTitle>
            <IonCardSubtitle>
              Explore the historical valleys of Destination Three!
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonNavLink
              routerDirection="forward"
              component={() => <Destination3 />}
            >
              <IonButton color="warning">Go to Destination Three</IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default DestHome;
