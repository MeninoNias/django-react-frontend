import React from 'react'

export default function ItemComponent(props) {

    const status = props.status

    return <li>{ props.name } - {status ? <p>Feito</p> : <p>Pendente</p>}</li>
}