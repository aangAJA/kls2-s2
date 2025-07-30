import Cookies from "js-cookie";

//Untuk mengambi nilai cookie, jika cookie tidak ditemukan akan 'undifined'
export const getCookie = (key: string) => {
    return Cookies.get(key)
}

//Untuk menyimpan cookie dengan nilai tertentu (plainText), dan akan kadaluarsa setelah 1 hari
export const storeCookie = (key: string, plainText: string) => {
    Cookies.set(key, plainText, {expires: 1})
}

//Untuk menghapus komponen cookie berdasarkan nama (key)
export const removeCookie = (key: string) => {
    Cookies.remove(key)
}

