import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";

import { Provider } from "react-redux";
import store from "./redux/store";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <ItemContainer cake />
      <ItemContainer />
      <NewCakeContainer />
      <IceCreamContainer />
      <CakeContainer />
      <HooksCakeContainer />
      <UserContainer />
    </Provider>
  );
}

export default App;
