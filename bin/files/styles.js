const styles = `/* You can add global styles to this file, and also import other style files */
@import "./app/shared/styles/VScss/VSstyles.scss";
@import "./app/app.component.scss";
@import "./app/shared/styles/custom.scss";`;

const theme = `@import "../node_modules/ng-zorro-antd/ng-zorro-antd.less";

@primary-color: #0552DB;
`;

module.exports = {
    styles,
    theme
};