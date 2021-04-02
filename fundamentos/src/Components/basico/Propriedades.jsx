import React from 'react';

export default function Propriedades(props){
    return(
        <div>
            <h2>{props.nome}</h2>
            <h2>{props.sobrenome}</h2>
            <h2>{props.idade}</h2>
        </div>
    )
}