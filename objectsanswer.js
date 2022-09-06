let newObject = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  topping: [
    { id: "5001", type: "Icing" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate Toppings" },
    { id: "5004", type: "Maple", mapleBatter: ["sweet batter", "dry batter"] },
    (batter = [
      { id: "1001", type: "Regular" },
      {
        id: "1002",
        type: "Chocolate",
        normalBatter: [
          "dry choco",
          {
            dryChoco: "ganachey taste",
            wetChoco: "wet runny taste",
          },
          ["red velvet", 68, ["orange", "lemon zest", "banana flavour"]],
        ],
      },
      { id: "1003", type: "Blueberry" },
      { id: "1004", type: "Devil's Food", amount: "7$" },
    ]),
  ],
};
console.log(
  `I want a 3-layered ${newObject.name},with ${newObject.type}s, ${newObject.topping[4].type}, ${newObject.topping[1].type} with ${newObject.topping[6].mapleBatter[1]} and ${newObject.topping[2].type} with a ${newObject.topping[7][1].normalBatter[1].wetChoco}, that has the regular ${newObject.topping[7][1].normalBatter[2][1]} ${newObject.topping[3].type} with ${newObject.topping[7][1].normalBatter[2][2][2]}, ${newObject.topping[7][1].normalBatter[2][0]} and ${newObject.topping[7][2].type} ${newObject.topping[0].type} that cost ${newObject.topping[7][3].amount}`
);
