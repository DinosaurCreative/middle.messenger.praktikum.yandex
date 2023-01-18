import "./chat.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./chat.hbs";

Handlebars.registerPartial("chat", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};