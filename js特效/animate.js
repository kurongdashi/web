/**
 * Created by Administrator on 2017/2/28.
 */

//    获取当前位置某个的属性,带px的结果
function getStyle(obj,attr) {

    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}
//        fn 回调函数
function animate(obj,json,fn) {
    //每次执行动画前先清除原来对象的定时器，给每个执行的对象增加定时器，方便各自清除
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
//                1、变量json,获取属性，然后获取当前位置属性
        var flag=true;
        for(var attr in json){
            var current=parseInt(getStyle(obj,attr));
//                   获取步长
            var step=(json[attr]-current)/10;
//                    取整
            step=step>0?Math.ceil(step):Math.floor(step);
//                    变化,这里先只做带px的属性值得变
//                    1、增加透明度变化
            if(attr=="opacity"){
//                        支持opacity的浏览器
                if(attr in obj.style){
                    obj.style.opacity=json[attr];
                }else{
//                      不支持opacity的浏览器
                    obj.style.filter="alpha(opacity="+json[attr]*100+")";
                }
            }else{
                obj.style[attr]=current+step+"px";
            }

//                    根据条件停止定时器
            if(current!=json[attr]){
//                        只要有一个属性没有运动完就不要停止定时器
                flag=false;
            }

        }
        if(flag){
            clearInterval(obj.timer);
            if(fn!=null){
                fn();
            }
        }
    },10);

}

