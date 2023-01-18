import "./avatar.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./avatar.hbs";

Handlebars.registerPartial("avatar", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};