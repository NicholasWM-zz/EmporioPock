const removeItemsSelecionados = (listaState, setListaState, itemSelecionado) => {
    let items = [...listaState]
    items.splice(listaState.findIndex(item => !!item.nome.includes(itemSelecionado.nome)), 1)
    setListaState([...items])
}

module.exports ={
    removeItemsSelecionados
}