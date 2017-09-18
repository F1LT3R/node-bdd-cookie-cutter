// Include File System library (to load files)
const fs = require('fs')

// Create an object for export
const myLib = {}

// Create a public function on the exported object
myLib.loadfile = filename =>
	new Promise((resolve, reject) => {
		fs.readFile(filename, 'utf8', (err, content) => {
			if (err) {
				// Reject promise if file can not load
				return reject(err)
			}

			resolve(content)
		})
	})

module.exports = myLib