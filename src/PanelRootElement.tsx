import React from "react";
import ReactDOM from "react-dom/client";
import { getHassTypes, updateState } from "./helpers/updateState";
import { selectToken, updateToken } from "./redux/userSlice";

export default (PanelRoot: any) =>
  class extends HTMLElement {
    _root: ReactDOM.Root;

    constructor() {
      super();
      this._root = ReactDOM.createRoot(this);
      const props: any = {};

      props["hass"] = {
        set(value: any) {
          const [config, services, entities, user] = getHassTypes(value);
          updateState(value.auth.data.access_token, selectToken, updateToken);
        },
      };

      props["route"] = {
        set(value: any) {},
      };

      props["narrow"] = {
        set(value: any) {},
      };

      props["panel"] = {
        set(value: any) {},
      };

      Object.defineProperties(this, props);
      this._render();
    }

    disconnectedCallback() {
      console.log("disconnected");
      this._root.unmount();
    }

    _render() {
      this._root.render(React.createElement(PanelRoot, {}));
    }
  };
