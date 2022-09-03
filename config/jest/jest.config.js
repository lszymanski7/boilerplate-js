module.exports = {
    collectCoverageFrom: ['<rootDir>/src/scripts/**/*.js'],
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/', 
        '/__tests__/'
    ],
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
        }
    },
    rootDir: '../../',
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/__tests__/**/*.(spec|test).js'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '\\.js$': 'babel-jest',
        '\\.(png|jpe?g|gif|svg|ico|webp|tiff|woff(2)?|eot|ttf|otf|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/file-transformer.js'
    },
    verbose: true
}
