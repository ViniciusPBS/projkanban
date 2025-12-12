const mostraPaginaKanban = (req, res) => {
    console.log('mainController.js', 'mostrarPaginaKanban()')

    let dados = {
        titulo: 'Kanban Project',
    }

    res.render('kanban', {dados:dados})
}

module.exports = {
    mostraPaginaKanban
}