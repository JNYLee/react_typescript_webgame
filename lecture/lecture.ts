function forEach<T>(arr: T[], callback: (item: T) => void): void {
	for (let i: number = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

forEach<number>([1, 2, 3, 4], (item) => {
	console.log(item);
});