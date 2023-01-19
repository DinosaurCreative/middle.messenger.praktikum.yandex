import "./errorPage.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./errorPage.hbs";

Handlebars.registerPartial("errorPage", tpl);
export default ({errorNumber, message}) => {
	console.log('first')
	return Handlebars.compile(tpl)({number: errorNumber, message});
};