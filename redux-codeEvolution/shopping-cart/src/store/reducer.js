import { createStore } from "redux";

const initialState = {
  users: [],
  loggedInUser: null,
  products: [
    {
      id: 1,
      name: "Pen",
      price: 5,
    },
    {
      id: 2,
      name: "Pencil",
      price: 5,
    },
    {
      id: 3,
      name: "Eraser",
      price: 5,
    },
    {
      id: 4,
      name: "Sharpner",
      price: 5,
    },
  ],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.user, action.payload],
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(reducer);
