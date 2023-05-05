input.onButtonPressed(Button.A, function () {
    led.toggle(0, 2)
})
input.onButtonPressed(Button.AB, function () {
    led.toggle(0, 2)
    led.toggle(4, 2)
})
input.onButtonPressed(Button.B, function () {
    led.toggle(4, 2)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
