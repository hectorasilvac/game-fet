window.onload = () => {
    const firstname_x = prompt('Ingrese el nombre del jugador X:');
    const lastname_x = prompt('Ingrese el apellido del jugador X:');
    const firstname_o = prompt('Ingrese el nombre del jugador O:');
    const lastname_o = prompt('Ingrese el apellido del jugador O:');

    let shift = 0;
let tables = [];

const pulsedBox = (e, pos) => {
    shift++;
    const btn = e.target;
    const figure = shift % 2 ? 'X' : 'O';
    btn.innerHTML = figure;
    tables[pos] = figure;
    if (hasWon()) {
        alert('¡Felicidades has ganado!');

        loadDoc({
            nombre_x: firstname_x,
            apellido_x: lastname_x,
            nombre_o: firstname_o,
            apellido_o: lastname_o,
            ganador: figure == 'O' ? 'X' : 'O',
            empate: 'No'
        })

        window.location.href = "/";
    }
}

function loadDoc({nombre_x, apellido_x, nombre_o, apellido_o, ganador, empate}) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // alert(this.responseText);
      }
    };
    xhttp.open("POST", "./addItem.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`nombre_x=${nombre_x}&apellido_x=${apellido_x}&nombre_o=${nombre_o}&apellido_o=${apellido_o}& ganador=${ganador}&empate=${empate}`);
  }

const hasWon = () => {
    if(tables[0] == tables[1] && tables[0] == tables[2] && tables[0]) {
        return true;
    } else if (tables[3] == tables[4] && tables[3] == tables[5] && tables[3]) {
        return true;
    } else if (tables[6] == tables[7] && tables[6] == tables[8] && tables[6]) {
        return true;
    } else if (tables[0] == tables[3] && tables[0] == tables[6] && tables[0]) {
        return true;
    } else if (tables[1] == tables[4] && tables[1] == tables[7] && tables[1]) {
        return true;
    } else if (tables[2] == tables[5] && tables[2] == tables[8] && tables[2]) {
        return true;
    } else if (tables[0] == tables[4] && tables[0] == tables[8] && tables[0]) {
        return true;
    } else if (tables[2] == tables[4] && tables[2] == tables[6] && tables[2]) {
        return true;
    }

    return false;
};

document.querySelectorAll('.box').forEach(
    (box, i) => box.addEventListener('click', (e) => pulsedBox(e, i))
);
}