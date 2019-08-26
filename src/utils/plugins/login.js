/* 
 * 函数式插件
 */

export const isLogin = function() {
  let accessToken = localStorage.getItem("accessToken");
  return !!accessToken;
};

export const goLogin = function() {
  console.log('goLogin', Object.toString(this.plugins.isLogin) === Object.toString(isLogin));
  if (!isLogin()) {
    location.href = "/login";
  }
};
