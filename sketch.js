let ur = document.getElementById("ur")
let uf = document.getElementById("uf")
let ms = document.getElementById("ms")
let mr = document.getElementById("mr")
let mf = document.getElementById("mf")
let dr = document.getElementById("dr")
let myBoolean = new Boolean()

//单选正确选项 universal-r
ur.onmousedown = function(){
      anime({
        targets: '.universal-r',
        scale: 0.8,
        background: 'rgba(110,113,115,0.18)'
      })
}

ur.onmouseup = function(){
    anime({
        targets: '.universal-r',
        scale: 1,
        background: 'rgba(44,201,78,0.2)'
      })
}

//单选错误选项 universal-f
uf.onmousedown = function(){
  anime({
      targets: '.universal-f',
      scale: 0.8
    })
}

uf.onmouseup = function(){
  anime({
      targets: '.universal-f',
      scale: 1,
      translateX: [
        {value: 0, delay: 40, easing: 'easeInOutQuad', duration: 120},
        {value: -16, easing: 'easeInOutQuad', duration: 120},
        {value: 16, easing: 'easeInOutQuad', duration: 120},
        {value: -16, easing: 'easeInOutQuad', duration: 120},
        {value: 0, easing: 'easeInOutQuad', duration: 120}
      ]
    })
}

//多选选中 multiple-s
ms.onmousedown = function(){
  anime({
    targets: '.multiple-s',
    scale: 0.8
  })
}

ms.onmouseup = function(){
anime({
    targets: '.multiple-s',
    scale: 1,
    background: 'rgba(253,236,211,1)'
  })
}

//多选正确选项 multiple-r
mr.onmousedown = function(){
  anime({
      targets: '.multiple-r',
      scale: 0.8
    })
}

mr.onmouseup = function(){
    anime({
      targets: '.multiple-r',
      scale: 1,
      background: 'rgba(44,201,78,0.2)'
    })
}

//多选错误选项 multiple-f
mf.onmousedown = function(){
  anime({
      targets: '.multiple-f',
      scale: 0.8
    })
}

mf.onmouseup = function(){
  anime({
      targets: '.multiple-f',
      scale: 1,
      translateX: [
        {value: 0, delay: 40, easing: 'easeInOutQuad', duration: 120},
        {value: -16, easing: 'easeInOutQuad', duration: 120},
        {value: 16, easing: 'easeInOutQuad', duration: 120},
        {value: -16, easing: 'easeInOutQuad', duration: 120},
        {value: 0, easing: 'easeInOutQuad', duration: 120}
      ]
    })
}

//拖拽选项 drag-r
function dragover_handler(dr) {
  dr.preventDefault();
  dr.dataTransfer.dropEffect = "move";
}

function drop_handler(dr) {
  dr.preventDefault();
  let data = dr.dataTransfer.getData("text/plain");
  dr.target.appendChild(document.getElementById(data));
}