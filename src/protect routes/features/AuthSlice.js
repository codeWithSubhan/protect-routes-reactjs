const initialState = {
  isAuth: JSON.parse(window.localStorage.getItem("userData")) ? true : false,
};

export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        isAuth: true,
      };
    case "user/logout":
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
}

export function login(res) {
  window.localStorage.setItem("userData", JSON.stringify(res.data.data));
  return { type: "user/login" };
}

export function logout() {
  window.localStorage.removeItem("userData");
  return { type: "user/logout" };
}
