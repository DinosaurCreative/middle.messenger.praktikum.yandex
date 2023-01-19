import "./header.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./header.hbs";

Handlebars.registerPartial("header", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
