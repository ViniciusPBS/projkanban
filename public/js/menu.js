    const menu = document.getElementById('menu');
            menu.addEventListener('change', (e) => {
                if (e.target.value === 'kanban') {
                    document.location.href = '/';
                } else if (e.target.valuealor === 'novoUsuario') {
                    document.location.href = '/novousuario';
                } else if (e.target.value === 'novaTarefa') {
                    document.location.href = '/novatarefa';
                }
            });