const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const readFile = (dir) => {
	return new Promise((resolve, reject) => {
		fs.readFile(dir, (err, data) => {
			if(err) {
				reject(err)
			}

			resolve(data);
		})
	})
}

const insertText = async (dir, start, delCount, newSubStr) => {
	return new Promise(async (resolve, reject) => {
		let buffer = await readFile(dir)
		let text = Buffer.from(buffer).toString();
		console.log(text);
		
		let idx = text.lastIndexOf(start);
		let rem = text.lastIndexOf(delCount);
		
		text = text.slice(0, idx) + newSubStr + text.slice(idx + Math.abs(rem));

		try {
			fs.rmSync(dir, { recursive: true })
			fs.writeFileSync(dir, text, { recursive: true })
			resolve()
		} catch(error) {
			reject(error)
		}

	})
}

module.exports = {
	getCurrentDirectoryBase: () => {
		return path.basename(process.cwd());
	},

	directoryExists: (filePath) => {
		return fs.existsSync(filePath);
	},

	readFile,
	insertText,
};