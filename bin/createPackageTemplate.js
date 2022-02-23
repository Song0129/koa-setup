import ejs from 'ejs';
import fs from 'fs';
import prettier from 'prettier';
import path from 'path';
import { fileURLToPath } from 'url';

export default config => {
	const __dirname = fileURLToPath(import.meta.url);
	const indexTemplate = fs.readFileSync(path.resolve(__dirname, '../template/package.ejs'));

	const code = ejs.render(indexTemplate.toString(), {
		packageName: config.packageName,
		middleware: config.middleware,
	});
	return prettier.format(code, { parser: 'json' });
};
