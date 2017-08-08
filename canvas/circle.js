/**
 * Created by Administrator on 2017/3/13.
 */
function CircleText(param) {
    this._init(param);
}
CircleText.prototype={
    _init:function (param) {
        this.x=param.x||0;
        this.y=param.y||0;
        this.innerRadius=param.innerRadius||20;
        this.outerRadius=param.outerRadius||30;
        this.stroke=param.stroke||"blue";
        this.strokeWidth=param.strokeWidth||4;
        this.innerFill=param.innerFill||"blue";
        this.outerFill=param.outerFill||"#ccc";
        this.innerOpacity=param.innerOpacity||1;
        this.outerOpacity=param.outerOpacity||0.5;
        this.text=param.text;
        //准备一个组，然后将要绘制的控件添加到组中，我们设置好组的绘制点，就可以了。
        this.grounp=new Konva.Group({
            x:this.x,
            y:this.y

        });
        //这里，要将这些控件添加到组里，所以这里的绘制点坐标，全部以组的绘制点坐标做参考
        var innerCircle=new Konva.Circle({
            x:0,
            y:0,
            radius:this.innerRadius,
            stroke:this.stroke,
            strokeWidth:this.strokeWidth,
            fill:this.innerFill
        });
        this.grounp.add(innerCircle);

        var outerRing=new Konva.Ring({
            x:0,
            y:0,
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,
            strokeWidth:this.strokeWidth,
            fill:this.outerFill,
            opacity:this.outerOpacity
        });
        this.grounp.add(outerRing);

        var text=new Konva.Text({
            //将矩形盒子绘制点从中心移动到外环最边上开始，width=外环直径
            x:-this.outerRadius,
            y:-10,
            width:this.outerRadius*2,
            align:"center",
            text:this.text,
            fontFamily:"微软雅黑",
            fontStyle:"bold",
            fontSize:20,
            strokeWidth:this.strokeWidth,
            fill:"#fff"
        });
        this.grounp.add(text);


    },
    addGrounp:function (layer) {
        layer.add(this.grounp);
    }


}
