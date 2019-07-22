class tools{
    static getdate(str){
        var nowTime = new Date(str);
        var timeStr = nowTime.getFullYear()+"-"+
            (nowTime.getMonth()+1).toString().padStart(2,"0")+"-"+
            nowTime.getDate().toString().padStart(2,"0")+ " "+
            nowTime.getHours().toString().padStart(2,"0")+":"+
            nowTime.getMinutes().toString().padStart(2,"0")+":"+
            nowTime.getSeconds().toString().padStart(2,"0");
        return timeStr;

    }
}
export default tools