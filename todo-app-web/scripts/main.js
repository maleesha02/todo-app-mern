/*function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
}*/

document.getElementById('btnCreate')
    .addEventListener('click', function () {
        const token = localStorage.getItem('token');
        if(token){
            window.location.href='dashboard.html';
        }else{
            window.location.href='login.html';
        }
    });

