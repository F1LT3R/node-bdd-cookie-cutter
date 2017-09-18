const path = require('path')

// Import Chai so we can write nice syntax
const chai = require('chai')

// Import the lib to test
const myLib = require('./my-lib')

// Alias expect from Chai (we will use it a lot!)
const expect = chai.expect


// Setup Chai for work with Promises
chai.use(require('chai-as-promised'))

// Allow implicit testing of failed promises
chai.should()

// Begin the tests!
describe('my-lib', () => {
	it('should fail to load a non-existent test file', () => {
		const filename = '../mock/no-file.txt'

		return myLib.loadfile(filename)
			// Implicit testing of failed promises
			.should.be.rejected
	})

	it('should load a test file "Hello World!"', () => {
		const filename = path.join(__dirname, '../mock/yes-file.txt')

		return myLib.loadfile(filename).then(contents => {
			expect(contents).to.be.a('string')
			expect(contents).to.equal('Hello World!\n')
		})
	})
})
