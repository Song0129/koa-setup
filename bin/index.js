#! /usr/bin/env node
// fs
import fs from 'fs';
import { execa } from 'execa';
import createIndexTemplate from './createIndexTemplate.js';
import createPackageTemplate from './createPackageTemplate.js';

import chalk from 'chalk';

import question from './question/index.js';
import { createConfig } from './config.js';

const answer = await question();

const config = createConfig(answer);
// 1.创建文件夹 =》 hei
console.log(chalk.blue(`创建文件夹 -> ${config.packageName}`));
fs.mkdirSync(getRootPath());
// 2.创建入口文件 =》 index.js
console.log(chalk.blue('创建入口文件'));
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));
// 3.创建package.json
console.log(chalk.blue('创建package.json'));
fs.writeFileSync(`${getRootPath()}/package.json`, createPackageTemplate(config));
// 4.安装依赖
console.log(chalk.blue('安装依赖'));
execa('yarn', {
	cwd: getRootPath(),
	stdio: [2, 2, 2],
});

function getRootPath() {
	return `./${answer.packageName}`;
}
