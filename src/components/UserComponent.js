import React from 'react';
import ListComponent from './ListComponent';

export default class UserComponent extends React.Component {

    state = { lists: [], loading: true }

    async componentDidMount(){

        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
            }

        config.headers['Authorization'] = 'Token 3a345b8d202cb7089853f319748d74b082ba23d1'

        var url = 'http://127.0.0.1:8000/lists/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data)
        this.setState({lists:data, loading:false});    
    }

    render(){

        const apiList = this.state.lists;

        return (
            <div>
                {apiList.map(list => <ListComponent key={list.id} listname={list.name}/>)}
            </div>
        )
    } 
    
}