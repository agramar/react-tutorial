import Router from "next/router";

export const getUserInfo = () => {
  if (typeof window === "undefined") return null;
  const userInfo = localStorage.getItem("user_info");
  if (userInfo) return JSON.parse(userInfo);
  return null;
};

export const setUserInfo = (data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user_info", JSON.stringify(data));
  }
};

export const signout = () => {
  localStorage.removeItem("user_info");
  Router.push("/signin");
};

export const getUserInfoId = () => {
  if (typeof window === "undefined") return null;
  const userId = localStorage.getItem("userid");
  if (userId) return JSON.parse(userId);
  return null;
};

export const setUserInfoId = (data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("userid", JSON.stringify(data));
  }
};

export const deleteUserInfoId = () => {
  localStorage.removeItem("userid");
};

export const ROLE_ADMIN = "ROLE_ADMIN";
export const ROLE_USER = "ROLE_USER";
export const userAuthGroups = [ROLE_ADMIN, ROLE_USER];
