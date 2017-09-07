export class ReactExample {
	public someData = [];

	public constructor() {
		this.someData = [
			{
				key: "key!",
				name: "original 1"
			},
			{
				key: "key",
				name: "original 2"
			},
			{
				key: "key",
				name: "original 3"
			}
		];
	}

	public addData = () => {
		const newArr = [...this.someData];
		const lng = newArr.length;
		for (var i = 0; i < 100; i++) {
			newArr.push({ key: "key" + lng + i, name: `SomeName ${lng + i}` });
		}

		this.someData = newArr;
	};

	public deleteData = () => {
		this.someData = [];
	};
}
