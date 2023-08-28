const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sEmail = document.querySelector('#m-email')
const sSenha = document.querySelector('#m-sebga')
const btnRegistrar = document.querySelector('#btnRegistrar')

let itens 
let id

function loadItens(){
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)  
    })
    loadItens()
    function insertItem(item, index){
        let tr = document.createElement('tr')

        tr.innerHTML = `<td>${item.nome}</td>
        <td>${item.email}</td>
        <td>R$ ${item.senha}</td>
        <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
        </td>
        <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
        </td>
        `
        tbody.appendChild(tr)
    }
}

function editItem(index){
    openModal(true, index)
}

function deleteItem(index){
    itens.splice(index, 1)
    setItensBD()
    loadItens()
}

function openModal(edit = false, index = 0){
    modal.classList.add('active')

    modal.onclick = e =>{
        if (e.target.className.indexOf('modal-container') =!-1 ){
            modal.classList.remove('active')
        }
    }
    if(edit){
        sNome.value = itens[index].nome
        sEmail.value = itens[index].email
        sSenha.value = itens[index].senha
        id = index
    }else{
        sNome.value = ''
        sEmail.value = ''
        sSenha.Value = ''
    }
}

btnRegistrar.onclick = e =>{
    if(sNome.value =='' || sEmail.value == '' || sSenha.value =='')
    return
}
e.preventDefault();

if(id !==undefined){
    itens[id].nome = sNome.value
    itens[id].email = sEmail.value
    itens[id].senha = sSenha.value
}else{
    itens.push({'nome': sNome.value, 'email': sEmail.value, 'senha': sSenha.value})
}

setItensBD()
modal.classList.remove('active')
loadItens()
id = undefined

function loadItens(){
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) =>{
        insertItem(item, index)
    })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc',JSON.stringify(itens))