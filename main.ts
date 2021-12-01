let Distance2 = 0
radio.setGroup(216)
basic.forever(function () {
    Distance2 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Inches
    )
    basic.showNumber(Distance2)
    basic.pause(100)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("A C5 A C5 A C5 A C5 ", 120)
        }
    }
})
basic.forever(function () {
    if (Distance2 < 5) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P6, 1)
        radio.sendString("ALARM")
    }
})
