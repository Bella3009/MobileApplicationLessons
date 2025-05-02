import { IonNav } from "@ionic/react";
import DestHome from "./DestHome";

const Home: React.FC = () => {
  return <IonNav root={() => <DestHome />}></IonNav>;
};

export default Home;
