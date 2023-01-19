import "./formInput.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./formInput.hbs";

Handlebars.registerPartial("formInput", tpl);

export default (props) => {
	return Handlebars.compile(tpl)({ props} );
};
