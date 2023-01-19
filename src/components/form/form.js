import "./form.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./form.hbs";

Handlebars.registerPartial("form", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
