const quad = document.querySelectorAll(".quad")
const pXpontos = document.querySelector("#px")
const pOpontos = document.querySelector("#po")
const velhaPontos = document.querySelector("#velha")
const resetBtn = document.querySelector("#reset")

const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let pX = []
let pO = []
let flag = true;

let pontos = {
    px: 0,
    po: 0,
    velha: 0,
}

for (let i = 0; i < quad.length; i++) {
    quad[i].addEventListener("click", () => {
        if (flag) {
            if (quad[i].innerHTML === "") {
                addX(i)
            }
        } else {
            if (quad[i].innerHTML === "") {
                addO(i)
            }
        }
        setTimeout(() => {
            checkVencedor()
        }, "400")
    })
}

function addX(i) {
    quad[i].innerHTML = "X"
    flag = false
    pX.push(i)
}

function addO(i) {
    quad[i].innerHTML = "O"
    flag = true
    pO.push(i)
}

resetBtn.addEventListener("click", () => {
    reset(1)
})

function reset(n) {
    for (let i = 0; i < quad.length; i++) {
        quad[i].innerHTML = ""
    }
    pO = []
    pX = []
    flag = true

    if (n === 1) {
        pontos.px = 0
        pontos.po = 0
        pontos.velha = 0
        pXpontos.innerHTML = `Pontos X: <strong>${pontos.px}</strong>`
        pOpontos.innerHTML = `Pontos O: <strong>${pontos.po}</strong>`
        velhaPontos.innerHTML = `Velha: <strong>${pontos.velha}</strong>`
    }
}

function checkVencedor() {
    if (pX.length >= 3 || pO.length >= 3) {
        for (c of combinacoes) {
            if (pX.includes(c[0]) && pX.includes(c[1]) && pX.includes(c[2])) {
                alert("Jogador X venceu")
                pontos.px++
                reset(0)
                pontuacao()
            } else if (pO.includes(c[0]) && pO.includes(c[1]) && pO.includes(c[2])) {
                alert("Jogador O venceu")
                pontos.po++
                reset(0)
                pontuacao()
            }
        }
    }

    if (pX.length === 5) {
        alert("VELHA!!!")
        pontos.velha++
        reset(0)
        pontuacao()
    }
}

function pontuacao() {
    pXpontos.innerHTML = `Pontos X: <strong>${pontos.px}</strong>`
    pOpontos.innerHTML = `Pontos O: <strong>${pontos.po}</strong>`
    velhaPontos.innerHTML = `Velha: <strong>${pontos.velha}</strong>`
}
