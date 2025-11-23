# Violación del ISP: Interfaz ancha fuerza a las clases a implementar métodos que no usan
# Problema: Todos los trabajadores deben implementar todos los métodos, incluso si no los necesitan

from abc import ABC, abstractmethod


class Worker(ABC):
    @abstractmethod
    def work(self) -> str:
        pass

    @abstractmethod
    def eat(self) -> str:
        pass


class Human(Worker):
    def __init__(self, name: str):
        self.name = name

    def work(self) -> str:
        return f"{self.name} está trabajando"

    def eat(self) -> str:
        return f"{self.name} está comiendo"


class Robot(Worker):
    def __init__(self, name: str):
        self.name = name

    def work(self) -> str:
        return f"{self.name} está trabajando"

    # ❌ Los robots no comen, pero están forzados a implementar esto
    def eat(self) -> str:
        raise NotImplementedError("Los robots no comen")


# Uso mostrando el problema
if __name__ == "__main__":
    human = Human()
    robot = Robot()

    print(human.work())  # ✅ Funciona
    print(human.eat())  # ✅ Funciona
    print(human.sleep())  # ✅ Funciona

    print(robot.work())  # ✅ Funciona
    # print(robot.eat())   # ❌ ¡Lanza error!
    # print(robot.sleep()) # ❌ ¡Lanza error!
