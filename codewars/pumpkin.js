function drawPumpkin() {
    const size = 5;
    let pumpkin = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            // Logic to create the pumpkin shape
            if ((i === 0 && (j === 1 || j === 3)) ||
                (i === 4 && (j === 1 || j === 3)) ||
                (i === 1 && (j === 0 || j === 4)) ||
                (i === 3 && (j === 0 || j === 4))) {
                pumpkin += '  ';
            } else {
                pumpkin += '🎃';
            }
        }
        pumpkin += '\n';
    }

    console.log(pumpkin);
}

drawPumpkin();