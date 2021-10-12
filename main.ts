input.onPinPressed(TouchPin.P1, function () {
    if (show) {
        show = 0
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        show = 1
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
let show = 0
basic.showIcon(IconNames.Happy)
show = 0
pins.digitalWritePin(DigitalPin.P0, 0)
