const data = [
  {
    course: "SPREADS",
    items: [
      {
        dish: "HUMMUS MASABACHA",
        description: "creamy & chunky garbanzo bean purée, lemon, garlic, green zhoug, pita",
        price: 13,
      },
      {
        dish: "HUMMUS NDUJA",
        description: "tahini, parsley, cilantro, sumac, pita",
        price: 13,
      },
      {
        dish: "BABA GHANOUSH",
        description: "tunisian eggplant salad, pine nuts, herbs, pita",
        price: 15,
      },
      {
        dish: "FARM CHEESE",
        description: "borage za'atar, savory, olive oil, black sesame buckwheat toast",
        price: 16,
      },
      {
        dish: "SMOKED TROUT RILLETTE",
        description: "calamansi herb cream, shallots, basterma spice, black sesame buckwheat toast",
        price: 24,
      },
      {
        dish: "ADDITIONAL BREAD",
        description: "blistered pita, black sesame buckwheat loaf, or laffa",
        price: 13,
      },
    ],
  },
  {
    course: "APPETIZERS",
    items: [
      {
        dish: "MARINATED OLIVES",
        description: "cinnamon, citrus, sheep's milk feta",
        price: 9,
      },
      {
        dish: "YELLOWTAIL CRUDO",
        description: "burnt vegetable chutney, finger lime, preserved citrus, fried shallots, curry leaves",
        price: 26,
      },
      {
        dish: "TABOULEH",
        description: "sumac vinaigrette, marjoram, crème fraîche, market vegetables, dried apricots, herbs",
        price: 17,
      },
      {
        dish: "MOROCCAN CARROT",
        description: "borage za'atar, savory, olive oil, black sesame buckwheat toastrose pickled beets, whipped feta, dukkah, sesame, majoram",
        price: 18,
      },
      {
        dish: "HEIRLOOM LETTUCE SALAD",
        description: "green tahini vinaigrette, cilantro, black sesame, rose petals, lime zest",
        price: 17,
      },
      {
        dish: "FRIED QUAIL",
        description: "red zhoug, honey, sumac pickled blueberries, thyme, aged goat cheese",
        price: 21,
      },
      {
        dish: "STEAMED CLAMS",
        description: "green chutney, cumin, ginger, serrano, tomato, coconut, fried pita",
        price: 28,
      },
      {
        dish: "GRILLED CELERY ROOT",
        description: "honey mushroom tzatziki, brown butter, burnt harissa, soft herbs",
        price: 21,
      },
      {
        dish: "HAWAIJ CAULIFLOWER",
        description: "brown mustard seeds, fried curry leaves, serrano creme fraiche, dried rose petals",
        price: 21,
      },
      {
        dish: "OYSTER MUSHROOM KEBAB",
        description: "lovage & avocado purée, sumac, meyer lemon, cilantro",
        price: 24,
      },
      {
        dish: "GRILLED PRAWNS",
        description: "harissa marinade, cured zucchini & cucumber tzatziki, fresh herbs, lime",
        price: 31,
      },
      {
        dish: "BUTTERNUT SQUASH FLATBREAD",
        description: "feta, baharat, cashews, brown butter, wildflower honey, fried sage",
        price: 23,
      },
      {
        dish: "MALAWACH",
        description: "ancient grain crispy layered bread, grated tomato, dill crème fraîche, soft egg, strawberry zhoug",
        price: 23,
      },
    ],
  },
  {
    course: "ENTREES",
    items: [
      {
        dish: "GRILLED DORADE",
        description: "smoked whole seed chermoula, cilantro, lime, turnips",
        price: 44,
      },
      {
        dish: "WAGYU OXTAIL TAGINE",
        description: "cherry reduction, cinnamon, cardamom, coconut rice, soft herbs",
        price: 46,
      },
      {
        dish: "SLOW ROASTED LAMB NECK SHAWARMA",
        description: "tahini, ajika, pickled vegetables, laffa",
        price: 50,
      },
      {
        dish: "WHOLE LUMINA LAMB RACK",
        description: "green amba rub, yogurt, charred tomatoes, purple daikon, tarragon",
        price: 85,
      },
      {
        dish: "32 OZ GRILLED WESTHOLME WAGYU RIBEYE",
        description: "fermented mushroom cream, marinated cucumbers, dill",
        price: 180,
      },
    ],
  },
  {
    course: "DESSERTS",
    items: [
      {
        dish: "ALMOND BLOSSOM HONEY NOUGAT GLACE",
        description: "candied kumquat, pine nut nougat, minted citrus salad",
        price: 15,
      },
      {
        dish: "APPLE PRUNE CAKE",
        description: "date toffee sauce, whipped crème fraîche",
        price: 15,
      },
      {
        dish: "RUM RAISIN ICE CREAM",
        description: "vanilla almond cookies",
        price: 14,
      },
      {
        dish: "CINNAMON STAR ANISE CRÈME BRÛLÉE",
        description: "turkish mocha cookie",
        price: 15,
      },
      {
        dish: "PINK LADY APPLE FILLED HAND PULLED FILO PASTRY",
        description: "calvados crème anglaise, cream, lebanese olive oil",
        price: 15,
      },
      {
        dish: "ROSE CLOVE CHOCOLATE DONUTS",
        description: "bar au chocolat ganache, sherry diplomat cream",
        price: 15,
      },
    ]
  },
  {
    course: "COCKTAILS",
    items: [
      {
        dish: "HEKA",
        description: "Spritz - white kina, manzanilla sherry, dry prosecco, lemon oil, dried citrus",
        price: 15,
      },
      {
        dish: "LILITH",
        description: "Collins - gin, pear, peach amaro, pink peppercorn, lemon, soda",
        price: 16,
      },
      {
        dish: "HANI",
        description: "Arak Colada - coconut, pineapple, lime, cardamom, nutmeg, arak, rhum blanc",
        price: 16,
      },
      {
        dish: "TAMAR",
        description: "Sour - tequila, fennel, reduced lager, lemon, mint, turmeric",
        price: 16,
      },
      {
        dish: "RABI",
        description: "Sour - mezcal, weichsel cherry, citrus, amaro, lemongrass",
        price: 17,
      },
      {
        dish: "ALMA",
        description: "Boulevardier - bourbon, rye, nocino, bitter, mirto vermouth, candied black walnut",
        price: 17,
      },
      {
        dish: "TIERRA",
        description: "Martini - old tom gin or fruit & grain vodka, golden beet bianco vermouth",
        price: 17,
      },
      {
        dish: "NEBUCHADNEZZAR",
        description: "House Old Fashioned - lamb fat bourbon, blue plum brandy, smoked ice, grapefruit",
        price: 19,
      },
    ],
  },
  {
    course: "ON TAP",
    items: [
      {
        dish: "1903 LAGER, HALF",
        description: "Craftsman Brewing / Pasadena, California",
        price: 6,
      },
      {
        dish: "1903 LAGER, FULL",
        description: "Craftsman Brewing / Pasadena, California",
        price: 10,
      },
      {
        dish: "BOONT AMBER ALE, HALF",
        description: "Anderson Valley Brewery / Boonville, CA",
        price: 6,
      },
      {
        dish: "BOONT AMBER ALE, FULL",
        description: "Anderson Valley Brewery / Boonville, CA",
        price: 10,
      },
      {
        dish: "ROSÉ CIDRE, HALF",
        description: "Aval / Bretagne, France",
        price: 7,
      },
      {
        dish: "ROSÉ CIDRE, FULL",
        description: "Aval / Bretagne, France",
        price: 11,
      },
      {
        dish: "HITACHINO ANBAI 'SALTY PLUM' ALE, BOTTLED",
        description: "Kiuchi Brewery/ Tokyo, Japan 11.2oz",
        price: 16,
      },
    ],
  },
  {
    course: "WINE",
    items: [
      {
        dish: "THE WINE LIST AT BAVEL CHANGES DAILY.",
        description: "It focuses primarily on producers from geographies that dot the Mediterranean coasts, while also showcasing kindred Californian wine . The wines range from classical and known to vanguard and emerging. We forgo wines that are solely commercial and strive for a balance that aptly supplies something for everyone, while remaining dedicated to enhancing your experience here as a whole. We would be happy to forward you today's wine list. Please send requests to info@baveldtla.com",
      },
      {
        dish: "CORKAGE",
        description: "A $50 corkage fee applies per 750 ml or less (2 bottle limit). A $100 fee applies per bottle larger than 750 ml (1 bottle limit).",
      },
    ],
  },
  {
    course: "NON ALCOHOLIC",
    items: [
      {
        dish: "SODA",
        description: "diet coke, coke",
        price: 4,
      },
      {
        dish: "SODA",
        description: "house ginger beer, bavel ginger ale",
        price: 6,
      },
      {
        dish: "BISMARK",
        description: "classic lemonade with date syrup / flat or sparkling",
        price: 6,
      },
      {
        dish: "SAFFRON",
        description: "pink lemonade with pomegranate & cinnamon / flat or sparkling",
        price: 6,
      },
      {
        dish: "ICED TEA",
        description: "august uncommon. burnt apple & oolong",
        price: 4.50,
      },
      {
        dish: "HOT TEA",
        description: "august uncommon. metropolitan black or fig & chamomile herbal / jing. whole leaf peppermint",
        price: 5,
      },
      {
        dish: "COFFEE",
        description: "verve. regular or decaf drip",
        price: 5,
      },
      {
        dish: "ESPRESSO",
        description: "verve. single shot",
        price: 4.50,
      },
      {
        dish: "ESPRESSO",
        description: "verve. cappuccino or latte",
        price: 6,
      },
    ],
  },
]

export default data
