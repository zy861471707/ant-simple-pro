export default class Tools{
    createALabel(path:string,fileName:string='用户信息.xlsx'){
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = path
        link.setAttribute('download',fileName)
        document.body.appendChild(link)
        link.click()
        link.remove()
        window.URL.revokeObjectURL(path)
    }
    formatDate($date:Date,$format:string) { // 这个是自定义的时间号的方法
        Date.prototype.Format = function (fmt:string) {
        var o:any = {
            "M+": this.getMonth() + 1, // 月份 
            "D+": this.getDate(), // 日 
            "h+": this.getHours(), // 小时 
            "m+": this.getMinutes(), // 分 
            "s+": this.getSeconds(), // 秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), // 季度 
            "S": this.getMilliseconds() // 毫秒 
        };
        if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
        }
        return new Date($date).Format($format);
   }
   delEmptyString(parps:object){
        let data=Object.assign(parps);
        Object.keys(parps).forEach((key) => (data[key] === null || data[key]===undefined) && delete data[key]);
        return data;
   }
    findAncestry (data2:any[], nodeId2:number) {
        let arrRes :any[]= [];
        if (data2.length === 0) {
            if (!!nodeId2) {
                arrRes.unshift(data2)
            }
            return arrRes.map(item=>item.id);
        }
        let rev = (data:any[], nodeId:number) => {
            for (let i = 0, length = data.length; i < length; i++) {
                let node = data[i];
                if (node.id === nodeId) {
                    arrRes.unshift(node)
                    rev(data2, node.pid);
                    break;
                }
                else {
                    if (!!node.children) {
                        rev(node.children, nodeId);
                    }
                }
            }
            return arrRes;
        };
        arrRes = rev(data2, nodeId2);
        return arrRes.map(item=>item.id);;
  }
}