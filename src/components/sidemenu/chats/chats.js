import "./chats.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./chats.hbs";

Handlebars.registerPartial("chats", tpl);

export default ({folded}) => {
	return Handlebars.compile(tpl)({folded});
};
