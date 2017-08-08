/**
 * Created by Administrator on 2017/3/10.
 */
function sprite(param) {
    this._init(param);
}
sprite.prototype={
    _init:function (param) {
        this.x=param.x||0;
        this.y=param.y||0;
        this.w=param.w||10;
        this.h=param.h||10;
        this.color=param.color||"red";
        this.fillColor=param.fillColor||"red";
        this.scaleX=param.scaleX||1;
        this.scaleY=param.scaleY||1;
        this.rotate=param.rotate||0;
        this.alpha=param.alpha||1;
    },
    draw:function (ctx) {
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotate*Math.PI/180);

        ctx.scale(this.scaleX,this.scaleY);

        ctx.globalAlpha=this.alpha;

        ctx.strokeStyle=this.color;
        ctx.rect(0,0,this.w,this.h);
        ctx.fillStyle=this.fillColor;
        ctx.fill();
        ctx.stroke();


        ctx.restore();
    }
}
