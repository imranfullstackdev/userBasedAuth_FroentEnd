export const initialstate = { role: null };
export const reducer = (state, action) => {
  if (action.type === "role") {
    return { role: action.payload };
  } else {
    return state;
  }
};
