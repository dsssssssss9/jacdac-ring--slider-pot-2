basic.showNumber(2)
let Led = 0
let Old_Led = 0
basic.forever(function () {
    Led = Math.round(modules.potentiometer1.position())
    modules.led1.setPixelColor(Math.map(Old_Led, 0, 100, 0, 7), 0x000000)
    modules.led1.setPixelColor(Math.map(Led, 0, 100, 0, 7), 0x00ff00)
    Old_Led = Led
})
