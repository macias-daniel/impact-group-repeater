import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

import "../x-625539-date-input";
import "@servicenow/now-input";
import "@servicenow/now-badge";
import "@servicenow/now-heading";

const view = ({ properties: { impactObject, index } }, { updateState }) => {
	return (
		<div className="body-wrapper">
			<x-625539-date-input
				label="Impact Start"
				value={""}
			></x-625539-date-input>
			<x-625539-date-input
				label="Impact Detected"
				value={""}
			></x-625539-date-input>
			<x-625539-date-input label="Impact End" value={""}></x-625539-date-input>
			<x-625539-date-input
				label="Impact Repaired"
				value={""}
			></x-625539-date-input>
			<now-select
				label="Current Impact"
				items={[{ id: "item1", label: "Unknown" }]}
				required
			/>
			<now-select
				label="Worst Impact"
				items={[{ id: "item1", label: "Unknown" }]}
				required
			/>
		</div>
	);
};

createCustomElement("x-625539-impact-body", {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: { impactObject: {}, index: {} },
});
