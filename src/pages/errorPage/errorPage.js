import "./errorPage.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./errorPage.hbs";

Handlebars.registerPartial("errorPage", tpl);
export default ({errorNumber, message}) => {

	return Handlebars.compile(tpl)({number: errorNumber, message});
};