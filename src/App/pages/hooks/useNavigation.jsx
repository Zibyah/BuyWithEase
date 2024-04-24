import React from "react";

const getCurrentHash = () => {
    return window.location.hash.replace('#', '')
}
export const useNavigation = () => {
    const [newURL, setState] = React.useState(getCurrentHash())
    window.addEventListener('hashchange', function (e) {
        console.log('location changed!', e.newURL);
        const path = getCurrentHash()
        setState(path)
    });
    const changeUrl = (path) => {
        window.location.hash = '#/'+path
    }
    return [newURL, changeUrl]
}