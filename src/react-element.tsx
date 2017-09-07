import { customElement, autoinject, bindable, noView, PLATFORM } from "aurelia-framework";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { MyReactElement } from "./components/my-react-element";

// import MyReactElement from "./components/my-react-element.tsx";

@noView()
@autoinject()
@customElement("react-element")
export class ReactElement {
	@bindable() public data;
	public reactComponent: any = {};
	constructor(public element: Element) {
		this.data = [];
	}

	public render() {
		this.reactComponent = ReactDOM.render(<MyReactElement data={this.data} />, this.element);
	}

	public bind() {
		this.render();
	}

	/**
     * Data Changed
     *
     * An automatic callback function when our "data"
     * bindable value changes. We need to rebind the React
     * element to get the new data from the ViewModel.
     *
     * @param {any} newVal The updated data
     * @returns {void}
     *
     */
	public dataChanged(newVal) {
		this.bind();
	}
}
