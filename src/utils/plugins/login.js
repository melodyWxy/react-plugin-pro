
export default {
    install(){
        return {
            isLogin:this.isLogin,
            goLogin:this.goLogin
        }
    },
    isLogin(){
        let accessToken = localStorage.getItem("accessToken");
        return !!accessToken;
    },
    goLogin() {
        if(!isLogin()) {
            location.href = "/login";
        }
    }
}