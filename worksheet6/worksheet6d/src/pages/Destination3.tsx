import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNavLink,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import DestHome from "./DestHome";
import Destination1 from "./Destination1";
import Destination2 from "./Destination2";

const Destination3: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Back"></IonBackButton>
          </IonButtons>
          <IonTitle>Destination Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Destination Three</h1>
        <IonCard>
          <img alt="picture" src="./image/400X200.png" />
          <IonCardHeader>
            <IonCardTitle>Attractions</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Attraction 1</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Attraction 2</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Attraction 3</IonLabel>
              </IonItem>
            </IonList>
            <IonNavLink
              routerDirection="forward"
              component={() => <DestHome />}
            >
              <IonButton fill="outline" color="primary">
                Book Destination
              </IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Explore Other Attractions</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonNavLink
              routerDirection="forward"
              component={() => <Destination1 />}
            >
              <IonButton fill="outline" color="danger">
                Go to Destination One
              </IonButton>
            </IonNavLink>
            <br />
            <IonNavLink
              routerDirection="forward"
              component={() => <Destination2 />}
            >
              <IonButton fill="outline" color="danger">
                Go to Destination Two
              </IonButton>
            </IonNavLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </>
  );
};

export default Destination3;
