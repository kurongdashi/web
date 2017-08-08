/**
 * Created by Administrator on 2017/3/14.
 */
function Wedge(param) {
    this._init(param);
}
Wedge.prototype={
    _init:function (param) {
        this.x=param.x;
        this.y=param.y;
        this.radius=param.radius||100;
        this.angle=param.angle||30;
        this.stroke=param.stroke||"red";
        this.fillColor=param.fillColor||"red";
        this.strokeWidth=param.strokeWidth||1;
        this.rotation=param.rotation||90;

        this.group=new Konva.Group({
            x:this.x,
            y:this.y
        });
        // wedge 楔形，默认从0度开始绘制
        var wedge=new Konva.Wedge({
            x:0,
            y:0,
            radius:this.r,
            angle:this.angle,
            stroke:this.stroke,
            fill:this.fillColor,
            rotation:this.rotation

        })
        this.group.add(wedge);
    },
    addToGroupOrLayer:function (layer) {
        layer.add(this.group)
    }
}