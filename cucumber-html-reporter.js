const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cucumber_json\login.cucumber.json',
	reportPath: 'test/report/cucumber_report.html',
    pageTitle:"QA TOOL Automation",
    reportName:`QA TOOL Automation - ${new Date().toLocaleString()}`,
	metadata:{
        app:{
            name:"QA Tool",
            version:"1"
        },
        browser: {
            name: 'chrome',
            version: '103'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress Automation'},
            {label: 'Release', value: '0.0.1'},
            {label: 'Cycle', value: ''},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});

