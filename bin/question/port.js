export default () => {
	return {
		type: 'number',
		name: 'port',
		default() {
			return 8080;
		},
		message: 'set port number',
	};
};
