import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
const private_api_key = '962677ec889821f6d103f28f3bb7883c75b39c58'
const public_api_key = 'c5a0a6f9c7257c59f34d57bb8e02a7d4'
const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()

export const reqCharacter = async (pagina = 1, limite = 20) => {
    const offset = (pagina - 1) * limite
    const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`)
    const { data } = await resp.json()
    console.log(data)
    return data
}