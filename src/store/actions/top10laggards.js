export const GET_TOP10LAGGARDS = 'GET_TOP10LAGGARDS';

export const GetTop10Laggards = (top10laggards) => ({
  type: GET_TOP10LAGGARDS,
  top10laggards: top10laggards
});

export const GenerateTop10Laggards = (payments)  => (dispatch) => {
  let delayTimes = {};

  for (let k in payments) {
    delayTimes[payments[k].id_klienta] = 0;
  }

  for (let k in payments) {
    let day = parseInt(payments[k].dzienp || 0);
    if (day > 12) delayTimes[payments[k].id_klienta]++;
  }

  let arr = [];
  for (let prop in delayTimes) {
    if (delayTimes.hasOwnProperty(prop)) {
      arr.push({
        key: prop,
        value: delayTimes[prop]
      })
    }
  }

  arr.sort((a, b) => {
    return b.value - a.value
  });

  dispatch(GetTop10Laggards(arr.slice(0, 10)))
};


