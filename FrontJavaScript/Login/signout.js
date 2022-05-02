function signout(){
    
    localStorage.removeItem('token');
    window.location.replace('file:///C:/xampp/htdocs/MaqCad/FrontJavaScript/Login/login.html');

    }
