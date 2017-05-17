import React from "react";
import ReactDOM from "react-dom";

import ReactLoginMS from "..";

ReactDOM.render(<ReactLoginMS
    clientId="a157e2ad-7d43-4478-9051-541fd1b2023f"
    redirectUri="http://localhost:9999/authComplete.html"
    scopes={["user.read"]}
    responseType="code"
    handleLogin={(data) => console.log(data)}
/>, document.getElementById("app"));