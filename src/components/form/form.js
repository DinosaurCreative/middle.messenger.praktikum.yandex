import Handlebars from "handlebars";
import tpl from "bundle-text:./form.hbs";
import "./form.scss";

Handlebars.registerPartial("form", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
