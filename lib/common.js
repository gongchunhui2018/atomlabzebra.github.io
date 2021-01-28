//碰撞检测函数
function hitBound(obj, obj2) {
    let objW = obj.offsetWidth;
    let objH = obj.offsetHeight;
    let objL = obj.offsetLeft;
    let objT = obj.offsetTop;
  
    let obj2W = obj2.offsetWidth;
    let obj2H = obj2.offsetHeight;
    let obj2L = obj2.offsetLeft;
    let obj2T = obj2.offsetTop;
    // 进行检测  
    if (objL + objW < obj2L || objT + objH < obj2T || objL > obj2L + obj2W || objT > obj2T + obj2H) {
      return false; // 没碰上
    } else {
      return true; // 碰上了
    }
  }

//连线

//正确反馈
function rightFB(ID, target, targetS, targetR){
  ID.onmousedown = function(){
    anime.timeline({
      targets: target,
      scale: 0.8,
    }).add({
      targets: targetS,
      opacity: 0
    },0)
  }

  ID.onmouseup = function(){
    anime.timeline({
      targets: target,
      scale: 1,
    }).add({
      targets: targetS,
      opacity: 0
    },0).add({
      targets: targetR,
      opacity: 0.2
    },0)
  }
}

//错误反馈
function falseFB(ID, target, targetS, targetF){
  ID.onmousedown = function(){
    anime.timeline({
      targets: target,
      scale: 0.8,
    }).add({
      targets: targetS,
      opacity: 0
    },0)
  }

  ID.onmouseup = function(){
    anime.timeline({
      targets: target,
      scale: 1,
    }).add({
      targets: targetS,
      opacity: 0
    },0).add({
      targets: targetF,
      translateX: [
        {value: 0, delay: 40, easing: 'easeInOutQuad', duration: 120},
        {value: -14, easing: 'easeInOutQuad', duration: 120},
        {value: 14, easing: 'easeInOutQuad', duration: 120},
        {value: -14, easing: 'easeInOutQuad', duration: 120},
        {value: 0, easing: 'easeInOutQuad', duration: 120}
      ]
    },0)
  }
}

//选中反馈
function selectFB(ID, target, targetS){
  ID.onmousedown = function(){
    anime.timeline({
      targets: target,
      scale: 0.8,
    }).add({
      targets: targetS,
      opacity: 1
    },0)
  }
  ID.onmouseup = function(){
    anime({
      targets: target,
      scale: 1,
    })
  }
}
