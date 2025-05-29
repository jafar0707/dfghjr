let text1 = document.querySelector(`.t1`)
let text2 = document.querySelector(`.t2`)
let text3 = document.querySelector(`.t3`)
let di = document.querySelector(`div`)

let a = prompt(`Familiya`)
let b = prompt(`Ism`)
let c = prompt(`Yosh`)

text1.innerHTML = `familiya: ${a}`
text2.innerHTML = `ism: ${b}`
text3.innerHTML = `yosh: ${c}`



di.style.background = `black`

text1.style.color = `white`
text2.style.color = `white`
text3.style.color = `white`