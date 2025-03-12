use('app')

db.space.drop()
db.createCollection('space')

db.space.insertOne({
  name: "Galaxy",
  description: "A vast system of billions of stars, gas, and dust bound together by gravity, often arranged in spiral arms or elliptical shapes and spanning thousands of light-years across the cosmos.",
  source: "Microsoft Copilot"
})

db.space.insertMany([
  {
    name: "Asteroid",
    description: "An asteroid is a small rocky body that orbits the sun, typically found in the asteroid belt between Mars and Jupiter.",
    source: "Microsoft Copilot"
  },
  {
    name: "Black Hole",
    description: "A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape from it.",
    source: "Microsoft Copilot",
  },
  {
    name: "Cloud Nebulae",
    description: "Cloud nebulae are vast clouds of gas and dust in space, often the birthplace of stars and planets.",
    source: "Microsoft Copilot",
  },
  {
    name: "Distant Space",
    description: "Distant space refers to the far reaches of the universe, beyond our immediate cosmic neighborhood.",
    source: "Microsoft Copilot"
  },
  {
    name: "Galaxy Collision",
    description: "A galaxy collision occurs when two galaxies pass through each other, often resulting in the formation of new stars.",
    source: "Microsoft Copilot"
  },
  {
    name: "Moon",
    description: "A moon is a natural satellite that orbits a planet, such as Earth's moon which influences tides and has phases.",
    source: "Microsoft Copilot"
  },
  {
    name: "Pulsar",
    description: "A pulsar is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation.",
    source: "Microsoft Copilot",
  },
  {
    name: "Star Death",
    description: "Star death refers to the end of a star's life cycle, which can result in a supernova, black hole, or white dwarf.",
    source: "Microsoft Copilot"
  },
  {
    name: "Sun",
    description: "The Sun is the star at the center of our solar system, providing light and heat essential for life on Earth.",
    source: "Microsoft Copilot"
  }
])
