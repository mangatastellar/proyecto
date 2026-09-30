async function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("contrasena").value;

    if (usuario === "admin" && clave === "1234"){
        alert("bienvenido");
        window.location.href = "index.html";
    }else{
        alert("usuario o contraseña incorrectos");
    }
}
$(document).ready(function () {
    $('#mostrar_contrasena').click(function () {
        if ($('#mostrar_contrasena').is(':checked')) {
            $('#contrasena').attr('type', 'text');
        } else {
            $('#contrasena').attr('type', 'password');
        }
    });
});