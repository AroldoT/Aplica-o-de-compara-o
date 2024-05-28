let win = []
let uni = []
let lin = []
let net = []
let mac = []
let other = []

const botaoS = document.querySelector('.enviar')
    if (botaoS !== '') {
        botaoS.addEventListener('click', (e) => {
            e.preventDefault();
            const selecionar = document.querySelector('input');
        const opcao = selecionar.value;
        if (opcao == 1) {
            win.push(opcao);
        }
        else if (opcao == 2) {
            uni.push(opcao);
        }
        else if (opcao == 3) {
        lin.push(opcao);
        }
        else if (opcao == 4) {
            net.push(opcao);
        }
        else if (opcao == 5) {
            mac.push(opcao);
        }
        else if (opcao == 6) {
            other.push(opcao);
        };
        selecionar.focus();
        selecionar.value = '';
    });
};

document.querySelector('.enviar').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        botaoS();
    };
});

const botaoM = document.querySelector('.exibir')
const div = document.querySelector('.texto')
const p = document.createElement('p')
botaoM.addEventListener('click', () => {
    const sis1 = win.length
    const sis2 = uni.length
    const sis3 = lin.length
    const sis4 = net.length
    const sis5 = mac.length
    const sis6 = other.length
    
    let total = sis1 + sis2 + sis3 + sis4 + sis5 + sis6
    
    p.innerText= `Sistema Operacional % 
    ---------------------
    Windows Server ${sis1} ${(sis1 * 100 / total).toFixed(1)}%
    Unix ${sis2} ${(sis2 * 100 / total).toFixed(1)}%
    Linux ${sis3} ${(sis3 * 100 / total).toFixed(1)}%
    Netware ${sis4} ${(sis4 * 100 / total).toFixed(1)}%
    MAC OS ${sis5} ${(sis5 * 100 / total).toFixed(1)}%
    Outros ${sis6} ${(sis6 * 100 / total).toFixed(1)}%
    ----------------------- Total: ${total}`
    div.appendChild(p)

    // console.log("Sistema Operacional %")
    // console.log("-----------------------")
    // console.log(`Windows Server ${sis1} ${sis1 * 100 / total}%`)
    // console.log(`Unix ${sis2} ${sis2 * 100 / total}%`)
    // console.log(`Linux ${sis3} ${sis3 * 100 / total}%`)
    // console.log(`Netware ${sis4} ${sis4 * 100 / total}%`)
    // console.log(`MAC OS ${sis5} ${sis5 * 100 / total}%`)
    // console.log(`Outros ${sis6} ${sis6 * 100 / total}%`)
    // console.log(`----------------------- Total: ${total}`)
});