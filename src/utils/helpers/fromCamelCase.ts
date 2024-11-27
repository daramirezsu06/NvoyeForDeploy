export function fromCamelCase(str: string): string {
  return str
    .replace(/([A-Z])/g, ' $1') // Inserta un espacio antes de cada letra mayúscula
    .trim() // Remueve espacios iniciales y finales
    .replace(/^./, (char) => char.toUpperCase()); // Capitaliza la primera letra
}
