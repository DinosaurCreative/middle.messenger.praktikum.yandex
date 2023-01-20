import "./temporaryNavigation.scss";
import Handlebars from "handlebars";
import tpl from "bundle-text:./temporaryNavigation.hbs";

Handlebars.registerPartial("temporaryNavigation", tpl);

export default ({pathes}) => {
	return Handlebars.compile(tpl)({pathes});
};
