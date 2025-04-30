import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  // Other Components
  IonButton,
  IonButtons,
  IonBackButton,
  IonNavLink,
} from "@ionic/react";
import Page2 from "./Page2";

const Page1: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page One</h1>
        <IonNavLink routerDirection="forward" component={() => <Page2 />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
};

export default Page1;
