import "./navBtn.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./navBtn.hbs";

Handlebars.registerPartial("navBtn", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
