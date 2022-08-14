import { Provider } from "react-redux";
import { store } from "../redux/store";
import SupportPanel from "./SupportPanel";

export default function ReduxProvider() {
  return (
    <Provider store={store}>
      <SupportPanel />
    </Provider>
  );
}
