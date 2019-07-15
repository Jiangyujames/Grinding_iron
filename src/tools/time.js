export default class Help{
    static data(){
        // 将时间戳转为年月日，时分秒
        var time = new Date();
        var timeStr = time.getFullYear()+"-"+
            (time.getMonth()+1).toString().padStart(2,"0")+"-"+
            time.getDate().toString().padStart(2,"0")+ " "+
            time.getHours().toString().padStart(2,"0")+":"+
            time.getMinutes().toString().padStart(2,"0")+":"+
            time.getSeconds().toString().padStart(2,"0");
        return timeStr;
    }
}