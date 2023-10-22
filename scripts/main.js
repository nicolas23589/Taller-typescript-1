import { dataSeries } from "./Data.js";
const seriesTbody = document.getElementById('seriesTbody');
function mostrarSeries(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    let average = 0;
    series.forEach((serie) => average = average + serie.seasons);
    average = Math.round(average / series.length);
    return average;
}
function mostrarPromedio() {
    let avarage = getAverageSeasons(dataSeries);
    let avarageMostrado = document.getElementById("avarage");
    avarageMostrado.innerText = "Seasons avarage: " + avarage.toString();
}
mostrarSeries(dataSeries);
mostrarPromedio();
