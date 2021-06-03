import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import labeLogo from '../assets/img/Labenu_principal.webp'

function MenuNav() {
    const history = useHistory()

    return (
        <div>
            <img src={labeLogo}></img>
            <p>Menu</p>
            <button>Home</button>
            <button>Professores</button>
            <button >Estudantes</button>
            <button>Turmas</button>
        </div>
    )
}

export default MenuNav