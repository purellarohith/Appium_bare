/* eslint-disable prettier/prettier */

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    host: 'localhost',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 60000,

    },
    maxInstances: 1,
    specs: ['./test/mochatest.js'],
    capabilities: [{
        'platformName': 'Android',
        'automationName': 'UiAutomator2',
        'udid': 'emulator-5554',
        'appPackage': 'com.admybrandtodo',
        'appActivity': '.MainActivity',
    }],
    sync: true,
};
