basic.forever(function () {
    for (let index = 0; index <= 8; index++) {
        for (let X = 0; X <= 4; X++) {
            for (let Y = 0; Y <= 4; Y++) {
                if (X + Y == index) {
                    led.plot(X, Y)
                    basic.pause(100)
                }
            }
        }
    }
})
