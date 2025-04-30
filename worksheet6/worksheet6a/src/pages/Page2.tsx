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
import Page3 from "./Page3";

const Page2: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Page Two</h1>
        <IonNavLink routerDirection="forward" component={() => <Page3 />}>
          <IonButton>Go to Page Three</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
};

export default Page2;
