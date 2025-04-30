import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  // Other Components
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from "@ionic/react";

const Worksheet4c: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
          <IonButton>Action 1</IonButton>
          <IonButton fill="clear">Action 2</IonButton>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail>
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                  />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>
              <IonItem>
                <IonThumbnail>
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                  />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>
              <IonItem>
                <IonThumbnail>
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                  />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>
              <IonItem>
                <IonThumbnail>
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                  />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Worksheet4c;
