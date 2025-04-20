import { vi } from "vitest";
import { mostrarGameOver, mostrarMensajePlantarse } from "./ui";
import { crearPartida } from "./model";

describe("comprobarResultado", () => {
  it("Debería mostrar 'Game Over' si la puntuación es mayor que 7.5", () => {
    // Arrange
    const partida = crearPartida();
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(8);

    // Simula la parte del DOM
    document.body.innerHTML = `
      <div id="puntuacion"></div>
    `;

    // Act
    mostrarGameOver(partida);

    // Assert
    const puntuacionDiv = document.getElementById("puntuacion");
    expect(puntuacionDiv?.textContent).toBe("Puntuación: 8 - Game Over");
  });

  it("Debería mostrar el mensaje '¡Lo has clavado! ¡Enhorabuena!' si la puntuación es exactamente 7.5", () => {
    // Arrange
    const partida = crearPartida();
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7.5);

    // Simula la parte del DOM
    document.body.innerHTML = `
      <div id="puntuacion"></div>
    `;

    // Act
    mostrarMensajePlantarse(partida);

    // Assert
    const puntuacionDiv = document.getElementById("puntuacion");
    expect(puntuacionDiv?.textContent).toBe(
      "Puntuación: 7.5 - ¡Lo has clavado! ¡Enhorabuena!"
    );
  });

  it("Debería mostrar 'Casi casi...' si la puntuación es 7", () => {
    // Arrange
    const partida = crearPartida();
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(7);

    // Simula la parte del DOM
    document.body.innerHTML = `
      <div id="puntuacion"></div>
    `;

    // Act
    mostrarMensajePlantarse(partida);

    // Assert
    const puntuacionDiv = document.getElementById("puntuacion");
    expect(puntuacionDiv?.textContent).toBe("Puntuación: 7 - Casi casi...");
  });

  it("Debería mostrar 'Has sido muy conservador.' si la puntuación es 4", () => {
    // Arrange
    const partida = crearPartida();
    vi.spyOn(partida, "puntuacion", "get").mockReturnValue(4);

    // Simula la parte del DOM
    document.body.innerHTML = `
      <div id="puntuacion"></div>
    `;

    // Act
    mostrarMensajePlantarse(partida);

    // Assert
    const puntuacionDiv = document.getElementById("puntuacion");
    expect(puntuacionDiv?.textContent).toBe(
      "Puntuación: 4 - Has sido muy conservador."
    );
  });
});
