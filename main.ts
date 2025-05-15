let level = 0
let fix = 0
basic.forever(function () {
    level = input.lightLevel()
    led.plotBarGraph(
    level,
    256
    )
    while (input.buttonIsPressed(Button.A)) {
        fix = level
        basic.showNumber(level)
    }
})
