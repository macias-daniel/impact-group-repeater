import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

import "@servicenow/now-input";
import "@servicenow/now-badge";
import "@servicenow/now-heading";

const view = ({ properties: { impactObject, index } }, { updateState }) => {
	return (
		<div className="title-wrapper">
			<div>
				<now-heading
					className="title-heading"
					label={"Impact Group " + (index + 1) + " - " + impactObject.services}
					level="3"
					variant="header-tertiary"
				></now-heading>
				<now-badge
					variant="secondary"
					size="sm"
					status="info"
					value={impactObject.count}
					round
				></now-badge>
			</div>
			<div>
				<now-button
					className="title-button"
					icon="plus-fill"
					label="Add Services"
					size="md"
				></now-button>
			</div>
		</div>
	);
};

createCustomElement("x-625539-impact-title", {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: { impactObject: {}, index: {} },
});
