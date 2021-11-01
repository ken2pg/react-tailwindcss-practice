export type STORE = {
  Email: string;
  password: string;
  userId: string;
  userName: string;
};

export type ACTIONTYPE =
  | {
      type: "signup";
      payload: {
        Email: string;
        password: string;
        userName: string;
      };
    }
  | { type: "signin" };

export const initialState: STORE = {
  Email: "",
  password: "",
  userId: "",
  userName: "",
};

export const reducer = (state: STORE, action: ACTIONTYPE) => {
  switch (action.type) {
    case "signup":
      return {
        Email: action.payload.Email,
        password: action.payload.password,
        userId: state.userId,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};
