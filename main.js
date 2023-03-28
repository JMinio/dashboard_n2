
const summary_items = document.getElementById("summary_items");

document.querySelector("#continue").addEventListener("click", traerDatos)

function traerDatos() {
    const newInstance = new XMLHttpRequest();

    //AJAX
    newInstance.open('GET', 'data.json', true);

    newInstance.send();

    newInstance.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);
            summary_items.innerHTML = '';

            for (let item of datos) {

                summary_items.innerHTML += `
                    
                <div class="${item.category} summary-grid">
            <div class="first"> 
              <img src=${item.icon} alt="reaction-result">
              <p>${item.category}</p>
            </div>
            <div class="second">
              <p><b>${item.score}</b> / 100</p>
            </div>
          </div>
                    
                    `

            }
        }
    }
}

{/* <div class="memory summary-grid">
            <div class="first">
              <img src="./assets/images/icon-memory.svg" alt="memory-result">
              <p>Memory</p>
            </div>
            <div class="second">
              <p><b>92</b> / 100</p>
            </div>
          </div>
          
          <div class="verbal summary-grid">
            <div class="first">
              <img src="./assets/images/icon-verbal.svg" alt="verbal-result">
              <p>Verbal</p>
            </div>
            <div class="second">
              <p><b>61</b> / 100</p>
            </div>
          </div>
          
          <div class="visual summary-grid">
            <div class="first">
              <img src="./assets/images/icon-visual.svg" alt="visual-result">
              <p>Visual</p>
            </div>
            <div class="second">
              <p><b>72</b> / 100</p>
            </div>
          </div> */}