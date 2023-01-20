import Handlebars from "handlebars";
import tpl from "bundle-text:./button.hbs";
import "./button.scss";

Handlebars.registerPartial("button", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
