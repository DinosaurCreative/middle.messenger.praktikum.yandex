import "./main.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./main.hbs";

Handlebars.registerPartial("main", tpl);

export default ({chatUser, folded, chatsArr, inputsValues, passwordsValues, route, coverPopupShown, toolPopupShown, chatToolPopupShown}) => {
	return Handlebars.compile(tpl)({chatUser, folded, chatsArr, inputsValues, passwordsValues, route,  coverPopupShown, toolPopupShown, chatToolPopupShown});
};
