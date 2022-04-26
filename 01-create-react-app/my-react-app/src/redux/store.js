import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "Hi, how are you?", likesCount: 12 },
        { id: 1, message: "It's my first post", likesCount: 18 },
        { id: 2, message: "don't worry be happy!", likesCount: 2 },
        { id: 3, message: "easy come easy go", likesCount: 1 },
      ],
      newPostText: "samurai",
    },

    dialogsPage: {
      messages: [
        { id: 0, message: "Hi" },
        { id: 1, message: "How are you?" },
        { id: 2, message: "Where are you from?" },
        { id: 3, message: "Yo!!!" },
        { id: 4, message: "Yo" },
      ],
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log("State changed")
  },

  getState() {
    debugger
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer // observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}

export default store
window.store = store
