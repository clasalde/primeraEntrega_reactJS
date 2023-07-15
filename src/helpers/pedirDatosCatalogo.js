import catalogo from "../data/catalogo.json"

export const pedirDatosCatalogo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(catalogo)
        }, 0)
    })
}