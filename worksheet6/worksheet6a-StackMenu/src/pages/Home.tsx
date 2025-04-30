import { IonNav } from "@ionic/react";
import Page1 from "./Page1";

const Home: React.FC = () => {
  return <IonNav root={() => <Page1 />}></IonNav>;
};

export default Home;
