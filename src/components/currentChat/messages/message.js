import "./message.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./message.hbs";

Handlebars.registerPartial("message", tpl);
export default ({ messages }) => {
	return Handlebars.compile(tpl)({ chat: messages.chat });
};