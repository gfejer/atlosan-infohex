input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    b_pressed = 0
    images.createImage(`
        . # # . .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `).showImage(0, 20)
})
function display_frame(num: number) {
    
    if (num == 0) {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 100)
    }
    
    if (num == 1) {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `).showImage(0, 100)
    } else if (num == 2) {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            `).showImage(0, 100)
    } else if (num == 3) {
        images.createImage(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . # # #
            `).showImage(0, 100)
    } else if (num == 4) {
        images.createImage(`
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . # # # #
            `).showImage(0, 100)
    } else if (num == 5) {
        images.createImage(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 6) {
        images.createImage(`
            . . . . #
            . . . . #
            . . . . #
            . . . # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 7) {
        images.createImage(`
            . . . . #
            . . . . #
            . . . # #
            . . # # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 8) {
        images.createImage(`
            . . . . #
            . . . # #
            . . . # #
            . # # # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 9) {
        images.createImage(`
            . . . # #
            . . . # #
            . . . # #
            # # # # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 10) {
        images.createImage(`
            . . . # #
            . . . # #
            . . # # #
            # # # # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 11) {
        images.createImage(`
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 12) {
        images.createImage(`
            . . # # #
            . . # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 13) {
        images.createImage(`
            . . # # #
            . # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 14) {
        images.createImage(`
            . # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0, 100)
    } else if (num == 15) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0, 400)
    } else if (num == 16) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `).showImage(0, 100)
    } else if (num == 17) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # . .
            `).showImage(0, 100)
    } else if (num == 18) {
        images.createImage(`
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            # # . . .
            `).showImage(0, 100)
    } else if (num == 19) {
        images.createImage(`
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            # . . . .
            `).showImage(0, 100)
    } else if (num == 20) {
        images.createImage(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 21) {
        images.createImage(`
            # # # # .
            # # # # .
            # # # # .
            # # # . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 22) {
        images.createImage(`
            # # # # .
            # # # # .
            # # # . .
            # # . . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 23) {
        images.createImage(`
            # # # # .
            # # # . .
            # # # . .
            # . . . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 24) {
        images.createImage(`
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 25) {
        images.createImage(`
            # # # . .
            # # # . .
            # # . . .
            . . . . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 26) {
        images.createImage(`
            # # # . .
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 27) {
        images.createImage(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 28) {
        images.createImage(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 29) {
        images.createImage(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 100)
    } else if (num == 30) {
        images.createImage(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0, 100)
    } else {
        
    }
    
    global_frame = num
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    b_pressed = 1
    images.createImage(`
        # # # . .
        # . . # .
        # # # # .
        # . . # .
        # # # . .
        `).showImage(0, 300)
    display_frame(global_frame)
})
let b_pressed = 0
let global_frame = 0
global_frame = 0
b_pressed = 1
basic.forever(function on_forever() {
    let index: number;
    if (b_pressed != 1) {
        index = global_frame
        while (index <= 29) {
            display_frame(index)
            if (b_pressed == 1) {
                break
            }
            
            index += 1
        }
    }
    
    if (b_pressed != 1) {
        for (let index2 = 0; index2 < 31; index2++) {
            display_frame(index2)
            if (b_pressed == 1) {
                break
            }
            
        }
    }
    
})
