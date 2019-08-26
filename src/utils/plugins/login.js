
function isLogin() {
  let accessToken = localStorage.getItem("accessToken");
  return !!accessToken;
}
function goLogin() {
  if(!isLogin()) {
    location.href = "/login";
  }
}
export default {
    isLogin,
    goLogin
}