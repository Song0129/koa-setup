export function createConfig(answer) {
	function haveMiddle(name) {
		return answer.middleware.indexOf(name) !== -1;
	}

	return {
		packageName: answer.packageName,
		port: answer.port,
		middleware: {
			static: haveMiddle('koaStatic'),
			router: haveMiddle('koaRouter'),
		},
	};
}
