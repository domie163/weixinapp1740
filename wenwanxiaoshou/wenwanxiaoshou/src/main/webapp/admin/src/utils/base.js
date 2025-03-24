const base = {
    get() {
        return {
            url : "http://localhost:8080/wenwanxiaoshou/",
            name: "wenwanxiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wenwanxiaoshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "文玩销售小程序"
        } 
    }
}
export default base
