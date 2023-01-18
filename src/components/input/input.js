import "./input.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./input.hbs";

Handlebars.registerPartial("input", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
