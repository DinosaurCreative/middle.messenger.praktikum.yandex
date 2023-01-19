import "./sidemenu.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./sidemenu.hbs";

Handlebars.registerPartial("sidemenu", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
