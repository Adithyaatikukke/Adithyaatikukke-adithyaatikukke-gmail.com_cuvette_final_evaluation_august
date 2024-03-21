export const getALLFilters = () => {
  return [
    {
      name: "Headphone type",
      types: [
        "Featured",
        "In-ear headphone",
        "On-ear headphone",
        "Over-ear headphone",
      ],
    },
    {
      name: "Company",
      types: [
        "Featured",
        "JBL",
        "Sony",
        "Boat",
        "Zebronics",
        "Marshall",
        "Ptron",
      ],
    },
    {
      name: "Colour",
      types: ["Featured", "Blue", "Black", "White", "Brown"],
    },
    {
      name: "Price",
      types: [
        "Featured",
        "₹0 - ₹1,000",
        "₹1,000 - ₹10,000",
        "₹10,000 - ₹20,000",
      ],
    },
  ];
};
export const getSortByFilter = () => {
  return {
    name: "Sort by : Featured",
    types: [
      "Featured",
      "Price : Lowest",
      "Price : Highest",
      "Name : (A-Z)",
      "Name : (Z-A)",
    ],
  };
};
