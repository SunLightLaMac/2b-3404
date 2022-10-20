let count = 0
/**
 * rubbish
 */
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    count = 9
    basic.showNumber(count)
    for (let index = 0; index < 4; index++) {
        basic.showNumber(count)
        count += -1
    }
})
