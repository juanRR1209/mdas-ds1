# Violación del LSP: Las clases derivadas rompen las expectativas de la clase padre
# ❌ Problema: FlyingBird asume que TODOS los pájaros pueden volar


# ❌ Ejemplo adicional: Rectangle/Square que viola LSP
class Rectangle:
    def __init__(self, width: int, height: int):
        self.width = width
        self.height = height

    def set_width(self, width: int) -> None:
        self.width = width

    def set_height(self, height: int) -> None:
        self.height = height

    def get_area(self) -> int:
        return self.width * self.height


class Square(Rectangle):
    def __init__(self, side: int):
        super().__init__(side, side)
    
    # ❌ Viola LSP: cambiar el ancho también cambia el alto
    def set_width(self, width: int) -> None:
        self.width = width
        self.height = width  # ❌ Efecto secundario inesperado

    def set_height(self, height: int) -> None:
        self.width = height  # ❌ Efecto secundario inesperado
        self.height = height


class Bird:
    def fly(self) -> str:
        return "¡Volando alto en el cielo!"

    def eat(self) -> str:
        return "Comiendo deliciosa comida"


# ❌ Problema: Penguin ES-UN Bird, ¡pero no puede volar!
class Penguin(Bird):
    def fly(self) -> str:
        # ❌ Esto viola LSP - rompe la expectativa del padre
        # ¡Comportamiento roto!
        raise Exception("¡Los pingüinos no pueden volar!")

    def swim(self) -> str:
        return "Nadando con gracia"


class Eagle(Bird):
    def fly(self) -> str:
        return "¡Volando como un águila!"


# Esta función espera que TODOS los pájaros vuelen ❌
def make_bird_fly(bird: Bird) -> str:
    return bird.fly()  # ¡Esto lanzará un error para Penguin!


# Probando la violación
if __name__ == "__main__":
    print("=== Demostración de Violación LSP ===")

    eagle = Eagle()
    penguin = Penguin()

    print("Águila:", make_bird_fly(eagle))  # ✅ Funciona bien

    try:
        print("Pingüino:", make_bird_fly(penguin))  # ❌ ¡SE ROMPE!
    except Exception as error:
        print("ERROR:", str(error))
