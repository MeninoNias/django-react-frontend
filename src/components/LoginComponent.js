import React from 'react'

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
        alert('Username: '+ this.state.username + ' Password:'+ this.state.password);
        event.preventDefault();
    }

    render(){
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
    }
}