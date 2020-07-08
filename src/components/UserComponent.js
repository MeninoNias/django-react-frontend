import React from 'react';
import ListComponent from './ListComponent';
import LoginComponent from './LoginComponent';

export default class UserComponent extends React.Component {

    state = { lists: [], loading: true }

    async componentDidMount(){

        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
            }

        config.headers['Authorization'] = 'Token ea8889912fed96678b2a1d652f45df3bff76e76d'

        var url = 'http://127.0.0.1:8000/lists/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data)
        this.setState({lists:data, loading:false});    
    }

    render(){

        const apiList = this.state.lists;
        const token = '';

        if (token === '')
            return <LoginComponent />
        else
            return (
                <div>
                    {apiList.map(list => <ListComponent key={list.id} listname={list.name} itens={list.item_set} />)}
                </div>
            )
    } 
    
}