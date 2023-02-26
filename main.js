const setup = {
  rows: 10,
  seats: 7,
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", ]
};

const DB = [];

generateRows(); 

function generateRows() {
  let cinemaParent = document.querySelector(".cinema-rows-container");

  for (let lettersRow = 0; lettersRow < setup.rows; lettersRow++) {
    cinemaParent.innerHTML += `<div class="d-flex justify-content-around ${setup.letters[lettersRow]}">
    <div class="seats" >${setup.letters[lettersRow]}</div>`;
    for (let seats = 1; seats <= setup.seats; seats++) {
      document.querySelector(
        `.${setup.letters[lettersRow]}`
      ).innerHTML += `<div class="seats" onclick="selectSeat('${setup.letters[lettersRow]}',${seats})">${seats}</div>`;
    }
    cinemaParent.innerHTML += `</div>`;
  }
}

function selectSeat(letter, numberSeat) {
  document.querySelector(
    ".title-form"
  ).innerHTML = `La silla seleccionada es: ${letter + numberSeat}`;
  document.querySelector(
    ".send-button-container"
  ).innerHTML = `<button type="button" class="btn btn-success mt-3" onclick="reserve('${letter}', ${numberSeat})">Enviar</button>`;
}

function reserve(letter, numberSeat) {
  const person = document.querySelector("#name").value;
  const cc = document.querySelector("#cc").value;
  const seatCode = letter + numberSeat;

  console.log(person, " ", cc, " ", seatCode);

  DB.push({person, cc, seatCode });


  showTable();
}

function showTable() {
  let parentTablePeople = document.querySelector(".table-people");
parentTablePeople.innerHTML = ''

  for (let index = 0; index < DB.length; index++) {
   parentTablePeople.innerHTML += `<tr>
   <td>${DB[index].person}</td>
   <td>${DB[index].cc}</td>
   <td>${DB[index].seatCode}</td>
   <td> <button class="btn btn-success mt-3" onclick="deleteReservation('${DB[index].seatCode}')">Delete </button> </td>
</tr>`;
    
  }
}

const deleteReservation = (seatCode) => {

  const indexObject = DB.findIndex(object => object.seatCode == seatCode);

  DB.splice(indexObject, 1);
  showTable(); 
  }
  []