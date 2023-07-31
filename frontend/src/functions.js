export function verificar(datos, nuevoDato) {
  return datos.some((d) => d.name === nuevoDato.name)
}
