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

const donorCategories = {
  ngo: ["E.U", "Slovakian Republic"],
  private: [
    "Zhejiang Business Association",
    "Communications Authority of Kenya",
    "Coca Cola",
  ],
  ing: ["US Embassy", "Embassy of Germany", "U.S. Government"],
};

const NATIONAL_GOVERNMENT = "National Government";
// const COUNTY_GOVERNMENT = "County Government";

const filterOutInKindDonations = (donations) => {
  return donations.filter((item) => item.amount_pledged !== "");
};

// Ignore for now since there isn't donor_type field in API
export const categorizeFundingData = (data) => {
  const categorized = data.map((item, index) => {
    const ngo = donorCategories.ngo.includes(item.donor);
    if (ngo) item.donor_type = categories[0];

    const privateOrg = donorCategories.private.includes(item.donor);
    if (privateOrg) item.donor_type = categories[1];

    const ing = donorCategories.ing.includes(item.donor);
    if (ing) item.donor_type = categories[2];

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
  const funds = [];

  data.forEach((item) => {
    // var expenditureTypes = item.expenditure_types;
    let exp = item.type;
    let fundSource = item.source_of_fund;
    let isNumber = Number(item.amount_expended);

    if (expendingBodies.indexOf(item.expending_body) === -1)
      expendingBodies.push(item.expending_body);

    // expenditureTypes.forEach((exp) => {
    if (categories.indexOf(exp) === -1) categories.push(exp);
    if (funds.indexOf(fundSource) === -1) funds.push(fundSource);

    if (!totals[exp] && isNumber) {
      totals[exp] = item.amount_expended;
    }

    if (totals[exp] && isNumber) {
      totals[exp] = +totals[exp] + +item.amount_expended;
    }
    // });
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
    funds: funds[0],
  };
};

export const getNationalGovernmentFunding = (fundingData) => {
  return filterOutInKindDonations(fundingData)
    .filter((item) => item.recipient[0] === NATIONAL_GOVERNMENT)
    .map((item) => item.amount_pledged)
    .reduce((a, b) => +a + +b, 0);
};
