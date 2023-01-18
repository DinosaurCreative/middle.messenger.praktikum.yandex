import "./currentChat.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./currentChat.hbs";

Handlebars.registerPartial("currentChat", tpl);

export default ({ chatUser, folded }) => {
	return Handlebars.compile(tpl)({ chatUser, folded });
};