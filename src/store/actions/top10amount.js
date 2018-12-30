export const GET_TOP10AMOUNT = 'GET_TOP10AMOUNT';

export const GetTop10Amount = (top10amount) => ({
  type: GET_TOP10AMOUNT,
  top10amount: top10amount
});

export const GenerateTop10Amount = (invoices)  => (dispatch) => {
  let ammountSum = {};

  for (let k in invoices) {
    ammountSum[invoices[k].id_klienta] = 0;
  }

  for (let k in invoices) {
    ammountSum[invoices[k].id_klienta] += (parseFloat(invoices[k].kwota) || 0)
  }

  let arr = [];
  for (let prop in ammountSum) {
    if (ammountSum.hasOwnProperty(prop)) {
      arr.push({
        key: prop,
        value: ammountSum[prop]
      })
    }
  }

  arr.sort((a, b) => {
    return b.value - a.value
  });

  dispatch(GetTop10Amount(arr.slice(0, 10)))
};


