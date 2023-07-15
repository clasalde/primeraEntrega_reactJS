import nosotros from "../data/nosotros.json"

export const pedirDatosNosotros = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(nosotros)
        }, 100)
    })
}