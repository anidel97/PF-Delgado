restoreData = JSON.parse(localStorage.getItem("registrosRecibidos"))
console.log("recuperamos info, ", restoreData)


let misRegistros= [];

const renderRegistros = (entities = [], entity) => {
    let bodyList = document.getElementById("main-content");
    bodyList.innerHTML = "";
    if (entities.length) {
        entities.forEach((entity) => {
            let record = document.createElement("div");
            /*record.setAttribute("class", "alert alert-secondary");*/
            record.setAttribute("id", entity.nombre.toString());
            /*record.setAttribute("role", "alert");*/
            record.innerHTML = `
            <h2> "Nombre:" ${entity.toString()}</h2>`;
            bodyList.append(record);
        });
    }
}

renderRegistros (misRegistros);