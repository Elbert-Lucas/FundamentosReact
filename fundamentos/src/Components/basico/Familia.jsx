import React from 'react';

import MembroFamilia from './MembroFamilia'

export default props => {

    return(
        <div>
            <MembroFamilia nome="Homer Jay" sobrenome={props.sobrenome}/>
            <MembroFamilia nome="Marjorie" sobrenome="Bouvier"/>
            <MembroFamilia nome="Bartholomew" sobrenome={props.sobrenome}/>
            <MembroFamilia nome="Lisa Marie" sobrenome={props.sobrenome}/>
            <MembroFamilia nome="Margereth" sobrenome={props.sobrenome}/>
        </div>
    )
}