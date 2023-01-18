import "./logo.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./logo.hbs";

Handlebars.registerPartial("logo", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};