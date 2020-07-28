import React from 'react';

function ButtonLink(props){
    //props -> objeto de propriedades do botão - passado como parâmetro
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;