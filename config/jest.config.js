module.exports = {
	collectCoverageFrom: [
		'<rootDir>/src/app/**'
	],
	coverageDirectory: '<rootDir>/coverage',
	coverageReporters: [
		'html', 
		'text'
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10
		}
	},
	rootDir: '../',
	testEnvironment: 'jest-environment-jsdom',
	testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
	testPathIgnorePatterns: [
		'/node_modules/'
	],
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/utils/file-transformer.js'
	},
	verbose: true
}
