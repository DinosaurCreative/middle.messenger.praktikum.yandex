import "./index.scss";
import Handlebars from "handlebars";
import template from 'bundle-text:./index.hbs';
import {
  login, registration, main, errorPage,
} from "./utils/componentsImports";

import * as constants from "./constants/constans";

const compilation = Handlebars.compile(template);

Handlebars.registerHelper('router', function (path) {
  return document.location.pathname = path;
});

const state = {
  sideMenuFolded: false,
  coverPopupShown: false,
  toolPopupShown: false,
  chatToolPopupShown: true,
};

const mainComponentRouting = (path) => {
  return {
    userInfo: path === 'user-info',
    password: path === 'password',
    chat: path === 'chat',
  };
};

const routing = () => {
  const path = document.location.pathname.split('/');

  if(path[1] === 'login' ) {
    return compilation({
      class: 'main-page',
      login: login({
        inputs: constants.loginFormFields,
      }),
    });
  };
  if(path[1] === 'registration' ) {
    return compilation({
      class: 'main-page',
      registration: registration({
        inputs: constants.registrationFormFields,
      }),
    });
  };
  
  if(path[1] === 'main' ) {
    return compilation({
      class: 'main-page',
      main: main({
        chatUser: constants.chat,
        folded: state.sideMenuFolded,
        chatsArr: constants.chats,
        inputsValues: constants.userData,
        passwordsValues: constants.passwordForms,
        route: mainComponentRouting(path[2]),
        toolPopupShown: state.coverPopupShown,
        coverPopupShown: state.toolPopupShown,
      }),
    });
  };

  return compilation({
    class: 'main-page',
    errorPage: errorPage({
      errorNumber: 404,
      message: "Страница не найдена",
    }),
  });
};
  
document.getElementById('root').innerHTML = routing();