import "./registration.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./registration.hbs";

Handlebars.registerPartial("registration", tpl);

export default (props = {}) => {
	return Handlebars.compile(tpl)(props);
};
