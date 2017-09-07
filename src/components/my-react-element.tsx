import * as React from "react";
import "react-virtualized/styles.css";
import List from "react-virtualized/dist/commonjs/List";

export interface HelloProps {
	data: Array<any>;
}

export class MyReactElement extends React.Component<HelloProps, undefined> {
	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.data.length) {
			return null;
		}

		const rowRenderer = ({
			key, // Unique key within array of rows
			index, // Index of row within collection
			isScrolling, // The List is currently being scrolled
			isVisible, // This row is visible within the List (eg it is not an overscanned row)
			style // Style object to be applied to row (to position it)
		}) => {
			return (
				<div key={key} style={style}>
					{this.props.data[index].name}
				</div>
			);
		};

		return (
			<div>
				<List width={300} height={300} rowCount={this.props.data.length} rowHeight={20} rowRenderer={rowRenderer} />
			</div>
		);
	}
}
