import React from 'react';

export default class Bot extends React.Component{
    componentDidMount(){
        (function (d, m) {
    var kommunicateSettings =
      { "appId": "37beb24dfd2311ce533ced59f722532e3", "popupWidget": true, "automaticChatOpenOnNavigation": true };
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
    }
    render(){
        return(
            <div></div>
        )
    }
}