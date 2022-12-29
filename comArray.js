export const data = [
  {
    parentName: "Electronics",
    nestedArray: [
      {
        nestedArray: [
          {
            nestedArray: [
              {
                nestedArray: [],
                parentName: "LED TV",
              },
            ],
            parentName: "TV",
          },
        ],
        parentName: "Screens",
      },
    ],
  },
  {
    parentName: "Gardening",
    nestedArray: [
      {
        nestedArray: [
          {
            nestedArray: [],
            parentName: "Hand tools",
          },
          {
            nestedArray: [
              {
                nestedArray: [],
                parentName: "Lawn mower",
              },
            ],
            parentName: "Machines",
          },
        ],
        parentName: "Tools",
      },
    ],
  },
];

export default function comArray(arr, value, base) {
  const extractMatch = arr
    .map((a) => {
      return a.parentName === value
        ? base + value
        : comArray(a.nestedArray, value, base + a.parentName + ".");
    })
    .filter(Boolean);

  return extractMatch[0];
}
