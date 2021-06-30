const routes = {
    '/' : zadanie1,
    '/zadanie2' : zadanie2,
    '/zadanie3' : zadanie3,
    '/zadanie4' : zadanie4,
    '/zadanie5' : zadanie5,
    '/zadanie6' : zadanie6,
    '/zadanie7' : zadanie7,
    '/zadanie8' : zadanie8,
    '/zadanie9' : zadanie9,
    '/zadanie10' : zadanie10,
    '/zadanie11' : zadanie11,
    '/zadanie12' : zadanie12,
    '/zadanie13' : zadanie13,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}
