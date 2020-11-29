# Globális változók:

global_frame: az utoljára megjelenített bitmap indexét tartalmazza.

b_pressed: a B gomb megnyomása esetén értéke 1 különben 0



# A display_frame(num) függvény

A bitmap-ek 0-tól 18-ig a megjelenítés sorrendjében vannak felvéve. 

A num paraméterben kapott bitmap-et jeleníti meg a show_image blokk segítségével. A bemeneti paraméter alapján egy if szerkezet dönti el a megjeleítendő képet. 

A függvény minden hívásnál elmenti a megjelenített bitmap indexét a global_frame globális változóba.



# A program működése



A forever blokkban két ciklus van, amelyek magja, csak akkor fut, ha a B gomb nem került megnyomásra.

Az első ciklus az utoljára megjelenített bitmap-től jeleníti meg a képeket, míg a második, 0-tól az összes képet megjeleníti. Ezzel lehet biztosítani a B gomb megnyomását követően a megjelenítés "folytatását".



Mindkét ciklus kiugrik amint a B gomb megnyomásra kerül. Ezzel biztosítjuk az animáció "leállítását".



Az on button A pressed blokk a b_pressed változó értékét 0-ra állítja ezzel engedélyezve a ciklusok lefutását a forever blokkban.

Az on button B pressed esemény hatására a b_pressed változó értéke 1 lesz ezzel letiltva a ciklusok működését.



A program indulásánál:

- a global_frame változó 0-ra van inicializálva, ezáltal az animáció elölről indul.

- a b_pressed változó értéke 1-re kerül beállításra (mintha korábban már meg lett volna nyomva a B gomb) így az animáció csak akkor indul, amikor megnyomjuk az A gombot és ennek hatására a b_pressed értéke 0-ra lesz állítva.


## Megjegyzés
A minta vidóban feltűnik egy rövid kis szünet az animációban, amikor minden led világít. Ez manuálisan lett beépítve.

## Csili-vili
A gomb nyomásokat követően a program rövid időre megjeleníti a megnyomott gomb azonosítóját.
