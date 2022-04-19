import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

import "../x-625539-impact-component";

const view = ({ properties: { impactArr } }) => {
  return (
    <div>
      {impactArr.map((impactObj, index) => {
        return (
          <x-625539-impact-component
            index={index}
            impactObject={impactObj}
          ></x-625539-impact-component>
        );
      })}
    </div>
  );
};

createCustomElement("x-625539-impact-group-repeater", {
  renderer: { type: snabbdom },
  view,
  styles,
  properties: {
    impactArr: {
      default: [
        { count: 3, services: "Services Not Identified" },
        { count: 7, services: "Services Not Identified" },
      ],
    },
  },
});
