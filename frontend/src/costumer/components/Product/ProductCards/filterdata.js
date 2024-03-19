 export const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White" },
        { value: "beige", label: "Beige" },
        { value: "blue", label: "Blue" },
        { value: "brown", label: "Brown" },
        { value: "green", label: "Green" },
        { value: "purple", label: "Purple" },
      ],
    },
    {
      id: "size",
      name: "Size",
      options: [
        { value: "S", label: "S" },
        { value: "M", label: "M" },
        { value: "L", label: "L" },
      ],
    },
  ];
  export const singleFilters = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "₹159 TO ₹399" },
            { value: "399-999", label: "₹399 TO ₹999" },
            { value: "999-1499", label: "₹999 TO ₹1499" },
            { value: "1499-1999", label: "₹1499 TO ₹1999" },
            { value: "1999-2499", label: "₹1999 TO ₹2499" },
            { value: "above-2499", label: "Above ₹2499" }
        ]
    },
    {
        id: "discount",
        name: "Discount",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
            { value: "90", label: "90% And Above" }
        ]
    }
];
