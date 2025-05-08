import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Recipe Master</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText color="primary">
          <h1>Welcome to Recipe Master</h1>
        </IonText>
        <IonText>
          <p>App registered to Sara Bella Gauci</p>
        </IonText>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-sm="6">
              <img src="./image/imag1.jpg" />
            </IonCol>
            <IonCol size="12" size-sm="6">
              <img src="./image/imag2.jpg" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" size-sm="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Easy Recipes</IonCardTitle>
                  <IonCardSubtitle>Become a Master Chef</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Discover simple recipes which anyone can do at home
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-sm="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Healthy Dishes</IonCardTitle>
                  <IonCardSubtitle>Track your calories</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Monitor your calories and nutrition with a simple to do app
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-sm="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Economical Cooking</IonCardTitle>
                  <IonCardSubtitle>Budget friendly</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  All our recipes are designed for students
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton id="alert" expand="block" color="primary">
          About
        </IonButton>
        <IonAlert
          trigger="alert"
          header="About"
          subHeader="Making cooking fun!"
          message="Developed by Sara Bella Gauci"
          buttons={["Ok"]}
        ></IonAlert>
      </IonContent>
    </IonPage>
  );
};

export default Home;
