class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

// The for (;;) construct is a way to intentionally 
// create a loop that doesn’t terminate on its own.
function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log("The multiplication failed")
            } else throw e;
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64