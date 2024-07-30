export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || undefined;
  }
  return undefined;
};

export const setToken = (token) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};

export const setRole = (role) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("role", role);
  }
};

export const getRole = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("role") || undefined;
  }

  return undefined;
};
export const getUserDetails = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : [];
  }
  return undefined;
};
export const setUserDetails = (user) => {
  if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
  }
  return undefined;
};


