import React from 'react';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to Seen It!
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                        <label>Username:
                            <input
                            type="text"
                            value={this.state.username}
                            onChange={this.forceUpdate('username')}
                            className="login-input"
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input
                            type="text"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }

}

export default SessionForm;