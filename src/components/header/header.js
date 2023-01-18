import Handlebars from "handlebars";
import tpl from "bundle-text:./header.hbs";
import "./header.scss";

Handlebars.registerPartial("header", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
