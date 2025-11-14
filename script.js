var box = document.querySelector('#box')
var btn = document.querySelector('button')

btn.addEventListener('click',function(){
    var r1 = Math.floor(Math.random()*256)
    var r2 = Math.floor(Math.random()*256)
    var r3 = Math.floor(Math.random()*256)
    console.log(box.style.backgroundColor=`rgb(${r1},${r2},${r3})`)
})
