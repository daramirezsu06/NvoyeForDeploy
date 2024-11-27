export function toCamelCase(str: string): string {
  return str
    .replace(/\s+/g, ' ') // Elimina espacios extra si hay
    .trim() // Remueve espacios iniciales y finales
    .split(' ') // Divide el string en palabras
    .map(
      (word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.substring(1) // Primera palabra en minúscula
          : word.charAt(0).toUpperCase() + word.substring(1) // Palabras siguientes con mayúscula inicial
    )
    .join(''); // Une las palabras sin espacios
}
