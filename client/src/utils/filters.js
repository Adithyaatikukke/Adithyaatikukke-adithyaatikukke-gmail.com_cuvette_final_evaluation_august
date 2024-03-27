export const getALLFilters = () => {
  return [
    {
      name: "Headphone type",
      types: ["In-ear headphone", "On-ear headphone", "Over-ear headphone"],
    },
    {
      name: "Company",
      types: ["JBL", "Sony", "Boat", "Zebronics", "Marshall", "Ptron"],
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
        "₹1,000 - ₹2,000",
        "₹2,000 - ₹3,000",
        "₹3,000 - ₹4,000",
        "₹4,000 - ₹10,000",
        "₹10,000 - ₹20,000",
      ],
    },
    {
      name: "Sort by : Featured",
      types: [
        "Price : Lowest",
        "Price : Highest",
        "Name : (A-Z)",
        "Name : (Z-A)",
      ],
    },
  ];
};
export const getSortByFilter = () => {
  return {
    name: "Sort by : Featured",
    types: [
      "Price : Lowest",
      "Price : Highest",
      "Name : (A-Z)",
      "Name : (Z-A)",
    ],
  };
};
