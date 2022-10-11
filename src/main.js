let inputBusqueda = document.getElementById("parametro").value;


if (inputBusqueda == "") {

    fetch(url).then((response) => response.json())
        .then((data) => {


            data.forEach(element => {

                const msg = `ID: ${element.id}<br/>Nombre: ${element.name}<br/>Correo: ${element.email}<br/>Sitio Web: ${element.website}.<br/><br/>`;
                texto += msg;


            });
            document.getElementById("u").innerHTML = texto;
        })
        .catch((er) => console.log("Algo salio mal"));


}