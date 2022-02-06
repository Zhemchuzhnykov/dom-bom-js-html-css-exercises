// building an application selecting a seat at an arena

const arenaElement = document.querySelector('.arena');
const selectedSeatElement = document.querySelector('.board__selected-seat');


const rangeFunction = (start, end) => {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
};

const rowSeats = () => {
  return rangeFunction(1,10).map(num => `<div class="sector__seat" data-seat-number = "${num}"></div>`).join('');
};

const sectionRows = () => {
  return rangeFunction(1,10).map(num => `<div class="sector__line" data-line-number = "${num}">${rowSeats()}</div>`).join('');
};

const arenaSections = () => {
  rangeFunction(1,3).map(num => {
    arenaElement.innerHTML += `<div class="sector" data-sector-number = "${num}">${sectionRows()}</div>`;
  });
};

const clickedSeat = (event) => {
  if(event.target.classList.contains('.sector__seat')) return;

  const seatNumber = event.target.dataset.seatNumber;
  const rowNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectionNumber = event.target.closest('.sector').dataset.sectorNumber;

  selectedSeatElement.textContent = `S ${sectionNumber} - L ${rowNumber} - S ${seatNumber}`;
};

arenaElement.addEventListener('click', clickedSeat);

arenaSections();