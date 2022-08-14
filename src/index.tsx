import "./index.css";
import ReduxProvider from "./components/ReduxProvider";
import PanelRoot from "./PanelRootElement";

customElements.define("ob-support-panel", PanelRoot(ReduxProvider));
