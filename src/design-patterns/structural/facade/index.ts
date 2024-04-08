const kiwi = {
  checkFlights(start, end) {
    // check
  },
};

const azul = {
  checkFlights(start, end) {
    // check
  },
};

const flightCheckerFacade = {
  checkFlights(start, end) {
    const flights = [];
    flights.push(kiwi.checkFlights(start, end));
    flights.push(azul.checkFlights(start, end));
    return flights;
  },
};

function main() {
  flightCheckerFacade.checkFlights(new Date(), new Date());
}
