let Right = document.getElementById("Right")
let False = document.getElementById("False")
let Select = document.getElementById("Select")
let Drag = document.getElementById("Drag")
let Collide = document.getElementById("Collide")
let flagA,flagB,flagC,flagD = 0
let optionA = document.getElementById("optionA")
let optionB = document.getElementById("optionB")
let optionC = document.getElementById("optionC")

//正确
rightFB(Right,'.RM','.RS','.RR');

//错误
falseFB(False,'.FM','.FS','.Fsvg');

//选中
selectFB(Select,'.SM','.SS');

//连线
selectFB(optionA,'.LAM','.LAS');
falseFB(optionC,'.LCM','.LCS','.optionC');
optionB.onmousedown = function(){
  anime.timeline({
    targets: '.LBM',
    scale: 0.8,
  }).add({
    targets: '.LBS',
    opacity: 1
  },0)
}
optionB.onmouseup = function(){
  anime.timeline({
    targets: '.LBM',
    scale: 1,
  }).add({
    targets: '.LBS',
    opacity: 0
  },0).add({
    targets: '.LBR',
    opacity: 0.2
  },0).add({
    targets: '.LAS',
    opacity: 0
  },0).add({
    targets: '.LAR',
    opacity: 0.2
  },0).add({
    targets: '.Line',
    opacity: 1
  },0)
}


//拖放
Draggable.create(".DM",{
  type:"x,y",
  onRelease:dropItem,
 });
 function dropItem() {
  let boundsBefore, boundsAfter;
  if(hitBound === true){
    anime({
      targets: '.Collide',
      scale: 1.2,
    })
  }
  if (this.hitTest(".Collide")){
      boundsBefore = this.target.getBoundingClientRect();
      $(this.target).appendTo('.Collide');
      boundsAfter = this.target.getBoundingClientRect();
      TweenMax.fromTo(this.target, 0.3, {
        x:"+=" + (boundsBefore.left - boundsAfter.left), 
        y:"+=" + (boundsBefore.top - boundsAfter.top)
      }, {
        x:0,
        y:0
      });
  } else {
      TweenMax.to(this.target,0.3,{x:0,y:0});
  }
}

/*Draggable.create(".DM",{
  type: "x,y",
  bounds: ".dragGroup",
  throwProps:true,
  onDrag: on,
  endDrag: end,
});

function on(){
  anime({
    targets: '.Collide',
    scale: 1.2,
  })
}

function end(){
  anime({
    targets: '.Collide',
    scale: 1,
  })
}*/