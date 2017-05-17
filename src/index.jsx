import "./authComplete";
import React from 'react';

class ReactLoginMS extends React.Component {

    constructor(props) {
        super(props);
        this.startOAuth = this.startOAuth.bind(this);
        this.getOAuthUrl = this.getOAuthUrl.bind(this);

        this.state = {
            clientId: this.props.clientId,
            redirectUri: this.props.redirectUri,
            scopes: this.props.scopes || [],
            responseType: this.props.responseType
        }

        this.oauthUrl = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
    }

    getOAuthUrl() {
        let scopes = encodeURIComponent(this.state.scopes.join(" "));
        let oauthUri = `${this.oauthUrl}?client_id=${this.state.clientId}&response_type=${this.state.responseType}` +
            `&redirect_uri=${encodeURIComponent(this.state.redirectUri)}` +
            `&scope=${scopes}&response_mode=fragment`;

        return oauthUri;
    }

    startOAuth() {
        let popup = (url, title, w, h) => {
            var left = (screen.width / 2) - (w / 2);
            var top = (screen.height / 2) - (h / 2);
            return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        }

        let _authCompleteCb = function (data) {
            this.props.handleLogin(data);
        }.bind(this);

        window.authScope = {
            authCompletedCB: _authCompleteCb
        }

        popup(this.getOAuthUrl(), "Microsoft Sign In", 600, 750);

    }

    render() {
        return (
            <button type="button" className="btn-microsoft-login" onClick={this.startOAuth}>
                Sign in with Microsoft
            </button>
        )
    }
}

export default ReactLoginMS;