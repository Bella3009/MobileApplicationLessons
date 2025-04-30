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

const Worksheet5a: React.FC = () => {
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
            <IonCol size="12" size-sm="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Column 1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>This is a responsive column.</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" size-sm="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Column 2</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Another responsive column.</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonContent>
        <IonText color="warning">
          <h1>Styled Section</h1>
          <p>This section has custom styling applied.</p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Worksheet5a;
