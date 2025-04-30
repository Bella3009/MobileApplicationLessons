import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  // Other Components
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from "@ionic/react";

const Worksheet5b: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to Ionic Layouts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>Explore the power of Ionic layouts and CSS!</IonText>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-sm="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle color="danger">Column 1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  This is a responsive column for small, medium and large
                  screens.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-sm="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Column 2</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Another responsive column with different sizes.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-sm="4">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Column 3</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  This column adjusts based on the screen size.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonContent className="ion-padding" color="primary">
        <IonText>
          <h1>Primary content</h1>
          <p>
            Here's a small text description for the content. Nothing more,
            nothing less.
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Worksheet5b;
