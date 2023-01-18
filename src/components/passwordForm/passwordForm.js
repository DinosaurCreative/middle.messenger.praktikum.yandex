import "./passwordForm.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./passwordForm.hbs";

Handlebars.registerPartial("passwordForm", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};