def on_button_pressed_a():
    global b_pressed
    b_pressed = 0
    images.create_image("""
        . # # . .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        """).show_image(0, 20)
input.on_button_pressed(Button.A, on_button_pressed_a)

def display_frame(num: number):
    global global_frame
    if num == 0:
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0, 100)
    if num == 1:
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            """).show_image(0, 100)
    elif num == 2:
        images.create_image("""
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            """).show_image(0, 100)
    elif num == 3:
        images.create_image("""
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . # # #
            """).show_image(0, 100)
    elif num == 4:
        images.create_image("""
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . # # # #
            """).show_image(0, 100)
    elif num == 5:
        images.create_image("""
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            """).show_image(0, 100)
    elif num == 6:
        images.create_image("""
            . . . . #
            . . . . #
            . . . . #
            . . . # #
            # # # # #
            """).show_image(0, 100)
    elif num == 7:
        images.create_image("""
            . . . . #
            . . . . #
            . . . # #
            . . # # #
            # # # # #
            """).show_image(0, 100)
    elif num == 8:
        images.create_image("""
            . . . . #
            . . . # #
            . . . # #
            . # # # #
            # # # # #
            """).show_image(0, 100)
    elif num == 9:
        images.create_image("""
            . . . # #
            . . . # #
            . . . # #
            # # # # #
            # # # # #
            """).show_image(0, 100)
    elif num == 10:
        images.create_image("""
            . . . # #
            . . . # #
            . . # # #
            # # # # #
            # # # # #
            """).show_image(0, 100)
    elif num == 11:
        images.create_image("""
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            # # # # #
            """).show_image(0, 100)
    elif num == 12:
        images.create_image("""
            . . # # #
            . . # # #
            # # # # #
            # # # # #
            # # # # #
            """).show_image(0, 100)
    elif num == 13:
        images.create_image("""
            . . # # #
            . # # # #
            # # # # #
            # # # # #
            # # # # #
            """).show_image(0, 100)
    elif num == 14:
        images.create_image("""
            . # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """).show_image(0, 100)
    elif num == 15:
        images.create_image("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """).show_image(0, 400)
    elif num == 16:
        images.create_image("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            """).show_image(0, 100)
    elif num == 17:
        images.create_image("""
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            # # # . .
            """).show_image(0, 100)
    elif num == 18:
        images.create_image("""
            # # # # #
            # # # # #
            # # # # .
            # # # # .
            # # . . .
            """).show_image(0, 100)
    elif num == 19:
        images.create_image("""
            # # # # #
            # # # # .
            # # # # .
            # # # # .
            # . . . .
            """).show_image(0, 100)
    elif num == 20:
        images.create_image("""
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            . . . . .
            """).show_image(0, 100)
    elif num == 21:
        images.create_image("""
            # # # # .
            # # # # .
            # # # # .
            # # # . .
            . . . . .
            """).show_image(0, 100)
    elif num == 22:
        images.create_image("""
            # # # # .
            # # # # .
            # # # . .
            # # . . .
            . . . . .
            """).show_image(0, 100)
    elif num == 23:
        images.create_image("""
            # # # # .
            # # # . .
            # # # . .
            # . . . .
            . . . . .
            """).show_image(0, 100)
    elif num == 24:
        images.create_image("""
            # # # . .
            # # # . .
            # # # . .
            . . . . .
            . . . . .
            """).show_image(0, 100)
    elif num == 25:
        images.create_image("""
            # # # . .
            # # # . .
            # # . . .
            . . . . .
            . . . . .
            """).show_image(0, 100)
    elif num == 26:
        images.create_image("""
            # # # . .
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            """).show_image(0, 100)
    elif num == 27:
        images.create_image("""
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0, 100)
    elif num == 28:
        images.create_image("""
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0, 100)
    elif num == 29:
        images.create_image("""
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0, 100)
    elif num == 30:
        images.create_image("""
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """).show_image(0, 100)
    else:
        pass
    global_frame = num

def on_button_pressed_b():
    global b_pressed
    b_pressed = 1
    images.create_image("""
        # # # . .
        # . . # .
        # # # # .
        # . . # .
        # # # . .
        """).show_image(0, 300)
    display_frame(global_frame)
input.on_button_pressed(Button.B, on_button_pressed_b)

b_pressed = 0
global_frame = 0
global_frame = 0
b_pressed = 1

def on_forever():
    if b_pressed != 1:
        index = global_frame
        while index <= 29:
            display_frame(index)
            if b_pressed == 1:
                break
            index += 1
    if b_pressed != 1:
        for index2 in range(31):
            display_frame(index2)
            if b_pressed == 1:
                break
basic.forever(on_forever)
