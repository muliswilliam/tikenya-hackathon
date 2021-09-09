import numeral from "numeral";

// load a locale
numeral.register("locale", "us", {
  delimiters: {
    thousands: ",",
    decimal: ".",
  },
  abbreviations: {
    thousand: "K",
    million: "Mn",
    billion: "Bn",
    trillion: "Tn",
  },
  ordinal: function (number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "$",
  },
});

export const categories = ["ngo", "private", "international_organization"];

const NATIONAL_GOVERNMENT = "National Government";
// const COUNTY_GOVERNMENT = "County Government";

const filterOutInKindDonations = (donations) => {
  return donations.filter((item) => item.amount_pledged !== "");
};

// Ignore for now since there isn't donor_type field in API
export const categorizeFundingData = (data) => {
  const categorized = data.map((item, index) => {
    if (index <= 7) item.donor_type = categories[0];

    if (index > 7 && index <= 11) item.donor_type = categories[1];

    if (index > 11) item.donor_type = categories[2];

    return item;
  });

  return categorized;
};

export const calculateTotalAid = (data) => {
  return filterOutInKindDonations(data)
    .map((item) => item.amount_pledged)
    .reduce((a, b) => +a + +b, 0);
};

export const filterByMenuId = (data, menuId) => {
  return (
    filterOutInKindDonations(data)
      .filter((item) => item.donor_type === categories[menuId])
      // Do not display on barchat donors who didn't pledge
      .filter((item) => Number(item.amount_pledged))
      .map((item) => {
        return {
          name: item.donor,
          amount: item.amount_pledged,
          formattedAmount: formatAmount(item.amount_pledged),
        };
      })
  );
};
// export const filterByMenuId = (data, menuId) => {
//   return filterOutInKindDonations(data)
//     .filter((item) => item.donor_type === categories[menuId])
//     .map((item) => {
//       return {
//         name: item.donor,
//         amount: item.amount,
//         formattedAmount: formatAmount(item.amount),
//       };
//     });
// };

export const formatAmount = (amount) => {
  numeral.locale("us");
  return numeral(amount).format("0,0.00 a");
};

export const formatNumber = (number) => {
  return numeral(number).format("0,0");
};

export const getExpenditureByBody = (data, body) => {
  return data.filter((item) => item.expending_body === body);
};

export const getExpenditureSummary = (data) => {
  const categories = [];
  const expendingBodies = [];
  const totals = {};

  data.forEach((item) => {
    var expenditureTypes = item.expenditure_types;

    if (expendingBodies.indexOf(item.expending_body) === -1)
      expendingBodies.push(item.expending_body);

    expenditureTypes.forEach((exp) => {
      if (categories.indexOf(exp) === -1) categories.push(exp);

      if (!totals[exp]) totals[exp] = item.amount_expended;

      if (totals[exp]) totals[exp] = totals[exp] + item.amount_expended;
    });
  });

  var keys = Object.keys(totals);

  const _totals = keys.map((key) => {
    return {
      name: key,
      value: totals[key],
    };
  });

  return {
    categories,
    totals: _totals,
    expendingBodies,
  };
};

export const getNationalGovernmentFunding = (fundingData) => {
  return filterOutInKindDonations(fundingData)
    .filter((item) => item.recipient[0] === NATIONAL_GOVERNMENT)
    .map((item) => item.amount_pledged)
    .reduce((a, b) => +a + +b, 0);
};
