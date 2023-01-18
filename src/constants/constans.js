export const registrationFormFields = [
  {
    id: "first_name",
    title: "Имя",
    type:  "text",
  },
  {
    id: "second_name",
    title: "Фамилия",
    type:  "text",
  },
  {
    id: "login",
    title: "Логин",
    type:  "text",
  },
  {
    id: "email",
    title: "Имейл",
    type:  "email",
  },
  {
    id: "phone",
    title: "Телефон",
    type:  "phone",
  },
  {
    id: "password",
    title: "Пароль",
    type:  "password",
  },
  {
    id: "password_repeat",
    title: "Повтор пароля",
    type:  "password",
  },
];

export const loginFormFields = [
  {
    id: "login",
    title: "Логин",
    type: "text",
  },
  {
    id: "password",
    title: "Пароль",
    type: "password",
  },
];

export const menuButtons = [
  {
    id: "profile",
    value: "Профиль",
  },
  {
    id: "theme",
    value: "Выбор темы",
  },
  {
    id: "storage",
    value: "Хранилище",
  },
];

export const chats = [
  {
    message: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur...",
    avatar: "https://oir.mobi/uploads/posts/2021-05/1620044293_55-oir_mobi-p-smeshnaya-gorilla-zhivotnie-krasivo-foto-60.jpg",
    owner: "King-Kong",
    ownerId: "1",
    newMessages: 0,
    lastMessageTime: "12:23",
  },
  {
    message: "Lorem ipsum dolor sit amet, consectetur...",
    avatar: "https://avatars.dzeninfra.ru/get-zen_doc/3342202/pub_60a9d4e46222fa7ebb99cdbd_60a9d545ba5f785686ef9cfd/scale_1200",
    owner: "Ding-Dong",
    ownerId: "2",
    newMessages: 12,
    lastMessageTime: "11:13",
  },
  {
    message: "minim veniam, quis nostrud exercitation",
    avatar: "https://phonoteka.org/uploads/posts/2021-07/1625228651_23-phonoteka-org-p-zastavka-gorilli-krasivie-zastavki-24.jpg",
    owner: "Pin-Pong",
    ownerId: "3",
    newMessages: 2,
    lastMessageTime: "01:23",
  },
  {
    message: "Lorem ipsum dolor sit amet, consectetur...",
    avatar: "https://cdn.fishki.net/upload/post/2017/12/29/2470615/03252c3f704ac2e50efcac105ddf9084.jpg",
    owner: "Lu Kang",
    ownerId: "4",
    newMessages: 0,
    lastMessageTime: "12:23",
  },
  {
    message: "Lorem ipsum dolor sit amet, consectetur...",
    avatar: "https://krasivosti.pro/uploads/posts/2021-04/1618329587_50-p-smeshnaya-gorilla-obezyani-krasivo-foto-55.jpg",
    owner: "Shan Tsung",
    ownerId: "5",
    newMessages: 0,
    lastMessageTime: "12:23",
  },
];

export const chat = {
  name: "King-Kong",
  presence: "12.32",
  image: "https://oir.mobi/uploads/posts/2021-05/1620044293_55-oir_mobi-p-smeshnaya-gorilla-zhivotnie-krasivo-foto-60.jpg",
  chat: [
    {
      me: false,
      messages: [
        { 
          img: "https://wp-s.ru/wallpapers/2/13/498566191298101/snoubordist-pered-pryzhkom-v-snezhnyx-gorax.jpg",
          title: "Джомолунгма",
          text: "Привет!",
          time: "12:22"
        },
        {
          text: "Планируем на нелдельку сгонять на Домбай. Ты как?",
          time: "12:22"
        }
      ]
    },
    {
      me: true,
      messages: [
        {
          text: "Балин, я так хочу покататься. Но на ближайшие месяцы я засел дома. На курсы записался...",
          time: "12:25"
        },
      ]
    },
    {
      me: false,
      messages: [
        { 
          text: "У вас каникулы будут?",
          time: "12:27"
        },
      ]
    }, {
      me: true,
      messages: [
        { 
          text: "Ага. Сразу как только растает снег &#128557;",
          time: "12:27"
        },
      ]
    },
    {
      me: false,
      messages: [
        { 
          text: "Ну учись тогда!",
          time: "12:22"
        },
        {
          text: "Кст, поглядишь тогда Листиком пока мы в отъезде? Как раз будет время оторваться от монитора и погулять)",
          time: "12:22"
        }
      ]
    },
    {
      me: true,
      messages: [
        { 
          text: "Я обожаю этого пса! Можете оставить его мне навсегда",
          time: "12:25"
        },
      ]
    },
    {
      me: false,
      messages: [
        { 
          text: "ЗБС. Забирай!))",
          time: "12:27"
        },
      ]
    }
  ]
};

export const userData = {
  avatar: "https://oir.mobi/uploads/posts/2021-05/1620044293_55-oir_mobi-p-smeshnaya-gorilla-zhivotnie-krasivo-foto-60.jpg",
  first_name: "Петр",
  inputs: [

    {
      title: "Имя",
      value: "Петр",
      id: "first_name",
      type: "text",
    },
    {
      title: "Фамилия",
      value: "Петров",
      id: "second_name",
      type: "text",
    },
    {
      title: "Логин",
      value: "Peter",
      id: "login",
      type: "text",
    },
    {
      title: "Имейл",
      value: "Kong_kong@yandex.ru",
      id: "email",
      type: "email",
    },
    {
      title: "Телефон",
      value: "+71111111111",
      id: "phone",
      type: "phone",
    }
  ],
}

export const passwordForms = [
  {
    title: "Старый пароль",
    id: "old_password",
    type: "password",
  },
  {
    title: "Новый парлоь",
    id: "new_password",
    type: "password",
  },
  {
    title: "Повторите пароль",
    id: "repeat_password",
    type: "password",
  },
]