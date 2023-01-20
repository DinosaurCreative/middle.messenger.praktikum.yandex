import "./userForm.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./userForm.hbs";

Handlebars.registerPartial("userForm", tpl);

export default ({ inputsValues, folded }) => {
	return Handlebars.compile(tpl)({ inputs: inputsValues, folded });
};
