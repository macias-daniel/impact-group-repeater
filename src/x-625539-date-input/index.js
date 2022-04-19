import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

import "@servicenow/now-input";
import "@servicenow/now-button";

const view = ({ properties: { label, value } }, { dispatch }) => {
  return (
    <div>
      <now-input
        label={label}
        messages={[]}
        placeholder=""
        step="any"
        type="text"
        value={value}
      >
        <now-button-iconic
          slot="end"
          icon="calendar-clock-outline"
          variant="tertiary"
          bare
        />
      </now-input>
    </div>
  );
};

createCustomElement("x-625539-date-input", {
  renderer: { type: snabbdom },
  view,
  styles,
  properties: { label: {}, value: {} },
  // eventHandlers: [
  // 	{
  // 		events: ["input"],
  // 		effect({
  // 			dispatch,
  // 			action: {
  // 				payload: { event },
  // 			},
  // 		}) {
  // 			const { value } = event.path[0];
  // 			dispatch("DATE_INPUT#VALUE_CHANGED", { value });
  // 		},
  // 	},
  // ],
});
