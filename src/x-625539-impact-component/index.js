import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

import "../x-625539-impact-title";
import "../x-625539-impact-body";

import "@servicenow/now-input";
import "@servicenow/now-badge";
import "@servicenow/now-heading";
import "@servicenow/now-select";
import "@servicenow/now-button";

const view = ({ properties: { impactObject, index } }, { updateState }) => {
	return (
		<div>
			<x-625539-impact-title
				impactObject={impactObject}
				index={index}
			></x-625539-impact-title>
			<x-625539-impact-body></x-625539-impact-body>
		</div>
	);
};

createCustomElement("x-625539-impact-component", {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		impactObject: {},
		index: {},
	},
	actionHandlers: {
		"DATE_INPUT#VALUE_CHANGED": (event) => {
			console.log(event);
		},
	},
});
