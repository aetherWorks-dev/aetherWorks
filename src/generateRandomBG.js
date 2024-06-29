export function generateColors() {

    const seed = document.getElementById("curAddress").textContent.toString();

    let seedNumber = parseInt(seed, 16);

    // Define a basic PRNG function
    function basicPRNG(seed) {
        return function() {
            seed = Math.sin(seed) * 10000;
            return seed - Math.floor(seed);
        };
    }

    // Initialize a PRNG instance with the seed
    let rand = basicPRNG(seedNumber);

    // Generate 4 random colors in hexadecimal format
    let colors = [];
    for (let i = 0; i < 4; i++) {
        let randomColor = '#' + Math.floor(rand() * 16777215).toString(16); // Generate random color
        colors.push(randomColor);
    }

    const gradientToYield = generateCSSGradient(colors);

    document.body.style.background=gradientToYield;

    return gradientToYield;
}

function generateCSSGradient(colors) {
    // Construct the CSS background gradient
    let gradient = `repeating-linear-gradient(45deg, ${colors[0]}, ${colors[1]} 15%, ${colors[2]} 20%, ${colors[3]} 30%)`;

    return gradient;
}

// // // Example usage:
//  let walletAddress = "4E4D7975806E4C6F6E676572536563726574";
//  let colors = generateColors(walletAddress);

//  console.log("Generated Colors:", colors);
//  document.body.style.background=colors;
