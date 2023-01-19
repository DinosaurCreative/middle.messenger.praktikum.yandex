import "./index.scss";
import Handlebars from "handlebars";
import template from "bundle-text:./index.hbs";
import {
  login, registration, main, errorPage, temporaryNavigation
} from "./utils/componentsImports";

import * as constants from "./constants/constants";

const compilation = Handlebars.compile(template);

const state = {
  sideMenuFolded: false,
  coverPopupShown: false,
  toolPopupShown: false,
  chatToolPopupShown: true,
};

const mainComponentRouting = (path) => {
  return {
    userInfo: path === "user-info",
    password: path === "password",
    chat: path === "chat",
  };
};

const getComponent = (path) => {
  if(path[1] === "error" ) {
    return errorPage({
      errorNumber: 404,
      message: "Страница не найдена",
    })
  };

  if(path[1] === "registration" ) {
    return registration({
      inputs: constants.registrationFormFields
    })
  };
  
  if(path[1] === "main" ) {
    return main({
      chatUser: constants.chat,
      folded: state.sideMenuFolded,
      chatsArr: constants.chats,
      inputsValues: constants.userData,
      passwordsValues: constants.passwordForms,
      route: mainComponentRouting(path[2]),
      toolPopupShown: state.coverPopupShown,
      coverPopupShown: state.toolPopupShown,
    })
  };

  return login({ inputs: constants.loginFormFields});
}

const routing = () => {
  const path = document.location.pathname.split("/");
  
  return compilation({
    class: "main-page",
    component: getComponent(path),
    temporaryNavigation: temporaryNavigation({
      pathes: constants.pathes,
    })
  })
};
  
document.getElementById("root").innerHTML = routing();
