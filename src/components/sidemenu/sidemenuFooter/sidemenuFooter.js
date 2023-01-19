import "./sidemenuFooter.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./sidemenuFooter.hbs";

Handlebars.registerPartial("sidemenuFooter", tpl);

export default () => {
	return Handlebars.compile(tpl)();
};
