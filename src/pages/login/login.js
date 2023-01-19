import "./login.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./login.hbs";

Handlebars.registerPartial("login", tpl);

export default (props) => {
	
	return Handlebars.compile(tpl)(props);
};
