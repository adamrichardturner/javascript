function cakes(recipe, available) {
    /*
    Pete likes to bake some cakes. He has some recipes and ingredients. 
    Unfortunately he is not good in maths. Can you help him to find out, 
    how many cakes he could bake considering his recipes?

    Write a function cakes(), which takes the recipe (object) and the 
    available ingredients (also an object) and returns the maximum 
    number of cakes Pete can bake (integer). For simplicity there 
    are no units for the amounts (e.g. 1 lb of flour or 200 g of 
    sugar are simply 1 or 200). Ingredients that are not 
    present in the objects, can be considered as 0.
    */

    // Find the min value after the following:
    // 1. Unpack recipe key values as entries in 2D arrays
    // 2. Iterate with map over each prop, val array pair from step 1
    // 3. Floor divide available[prop] by val or return 0 if not in available
    return Math.min(
        ...Object.entries(recipe).map(
            ([prop, val]) => Math.floor(available[prop] / val) || 0,
        ),
    )
}

// must return 2
console.log(
    cakes(
        { flour: 500, sugar: 200, eggs: 1 },
        { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
    ),
)

// must return 0
console.log(
    cakes(
        { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
        { sugar: 500, flour: 2000, milk: 2000 },
    ),
)
