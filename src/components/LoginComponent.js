import React from 'react'
import UserComponent from './UserComponent';

export default class LoginComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {username: '', password: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
      }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

    handleSubmit(event){
        var url = 'http://127.0.0.1:8000/api-token-auth/';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                this.setState({token: data.token});
            });
        event.preventDefault();
    }

    render(){
        var token = localStorage.getItem('token')    
        if (!token)
            return(
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome
                        <input type='text' value={this.state.username} onChange={this.handleChangeUsername} />
                        <input type='password' value={this.state.password} onChange={this.handleChangePassword} />
                    </label>
                    <input type='submit' value='Entrar'/>
                </form>
            )
        else
            return <UserComponent/>
    }
}