const package_json = (nombre) => `{
  "name": "${nombre}",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~11.2.7",
    "@angular/common": "~11.2.7",
    "@angular/compiler": "~11.2.7",
    "@angular/core": "~11.2.7",
    "@angular/forms": "~11.2.7",
    "@angular/platform-browser": "~11.2.7",
    "@angular/platform-browser-dynamic": "~11.2.7",
    "@angular/router": "~11.2.7",
    "@microsoft/signalr": "^5.0.5",
    "crypto-js": "^4.0.0",
    "ng-zorro-antd": "^11.3.0",
    "rxjs": "~6.6.0",
    "tslib": "^2.0.0",
    "zone.js": "~0.11.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.1102.6",
    "@angular/cli": "~11.2.6",
    "@angular/compiler-cli": "~11.2.7",
    "@types/crypto-js": "^4.0.1",
    "@types/jasmine": "~3.6.0",
    "@types/node": "^12.20.10",
    "codelyzer": "^6.0.0",
    "jasmine-core": "~3.6.0",
    "jasmine-spec-reporter": "~5.0.0",
    "karma": "~6.1.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.0.3",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "^1.5.0",
    "protractor": "~7.0.0",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~4.1.5"
  }
}
`;

module.exports = package_json;