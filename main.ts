import { Serie } from "./Serie.js";
import { dataSeries } from "./Data.js";
const seriesTbody: HTMLElement = document.getElementById('seriesTbody')!; 

function mostrarSeries(series: Serie[]): void {
    series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function getAverageSeasons(series: Serie[]): number {
    let average: number = 0;
    series.forEach((serie) => average = average + serie.seasons);
    average= Math.round( average/series.length);
    return average;
  }

  function mostrarPromedio(): void {
    let avarage: number = getAverageSeasons(dataSeries);
    let avarageMostrado: HTMLElement = document.getElementById("avarage")!;
    avarageMostrado.innerText = "Seasons avarage: " + avarage.toString();
}

mostrarSeries(dataSeries);
mostrarPromedio();