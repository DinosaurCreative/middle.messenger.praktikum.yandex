import "./currentChatHeader.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./currentChatHeader.hbs";

Handlebars.registerPartial("currentChatHeader", tpl);

export default ({chatUser}) => {
	return Handlebars.compile(tpl)(chatUser);
};