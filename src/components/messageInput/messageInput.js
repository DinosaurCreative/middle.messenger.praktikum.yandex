import Handlebars from "handlebars";
import tpl from "bundle-text:./messageInput.hbs";
import "./messageInput.scss";

Handlebars.registerPartial("messageInput", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
