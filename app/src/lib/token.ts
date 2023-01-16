export const token = (token = "") => {
  return {
    key: "login",
    setToken() {
      localStorage.setItem(this.key, token);
    },
    getToken() {
     return localStorage.getItem(this.key);
    },
    removeToken() {
      localStorage.removeItem(this.key);
    },
  };
};
