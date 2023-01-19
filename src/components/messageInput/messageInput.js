import "./messageInput.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./messageInput.hbs";

Handlebars.registerPartial("messageInput", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
