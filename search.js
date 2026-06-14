const trains = [
  { name: "Rajdhani Express", fare: 1200, seats: 5 },
  { name: "Shatabdi Express", fare: 850,  seats: 0 },
  { name: "Duronto Express",  fare: 999,  seats: 3 }
];

function searchTrains() {
  const from = document.getElementById("fromStation").value;
  const to = document.getElementById("toStation").value;
  const errorMsg = document.getElementById("errorMsg");
  const results = document.getElementById("results");

  if (from === "" || to === "") {
    errorMsg.innerText = "Please fill both From and To stations.";
    results.innerHTML = "";
    return;
  }

  errorMsg.innerText = "";
  let html = "";

  trains.forEach(function(train, i) {
    let soldOutHTML = "";
    let bookBtn = "";

    if (train.seats === 0) {
      soldOutHTML = `<p style="color:red; font-weight:bold;">SOLD OUT</p>`;
      bookBtn = `<button class="btn btn-secondary" disabled>Book</button>`;
    } else {
      bookBtn = `<button class="btn btn-success" id="bookBtn${i}" onclick="changeStateToBooked(${i})">Book</button>`;
    }

    html += `
      <div class="train-data">
        <h5>${train.name}</h5>
        <p>Fare: ₹${train.fare}</p>
        <p>Seats Available: ${train.seats}</p>
        ${soldOutHTML}
        ${bookBtn}
      </div>
    `;
  });

  results.innerHTML = html;
}

function changeStateToBooked(index) {
  const btn = document.getElementById(`bookBtn${index}`);

  btn.innerText = "Booking...";
  btn.style.backgroundColor = "gray";
  btn.disabled = true;

  setTimeout(function() {
    btn.innerText = "Booked Happy Journey";
    btn.style.backgroundColor = "green";
  }, 1000);
}