import "./popup.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./popup.hbs";

Handlebars.registerPartial("popup", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};