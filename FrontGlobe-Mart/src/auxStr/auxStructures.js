///// Access to context MODIFY 

// setMainData(prevData => ({
//     ...prevData,
//     logged: true
// }))

/////

export function removeTokenOnTime() {

    setTimeout(() => {

        localStorage.removeItem("token");

    }, 216000000)


}
export function isLogged() {

    if (localStorage.getItem("token")) {
        return true
    } else {
        return false
    }

}
export function setToken(token) {

    localStorage.setItem("token", token);
    removeTokenOnTime();
}

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(com|es|net)$/;
    return regex.test(email);
};
export function truncateText(text, length) {
    return text.length > length ? text.substring(0, length) + "..." : text;
};


export const commercialAds = [

    {
        id: 1,
        // title: "Ad 3",
        // description: "Description 3",
        imageURL: "https://img.freepik.com/premium-photo/halloween-shelf-decor-with-copy-space-against-white-wall-banner-background-white-shelf-with-pumpkin-spider-candle-decor-wide-banner-background-halloween_685067-4541.jpg?w=1380",
        // position: top subir arriba esto
    },
    {
        id: 2,
        // title: "Ad 4",
        // description: "Description 4",
        imageURL: "https://www.vie-aesthetics.com/wp-content/uploads/2023/01/Full-Width-Website-4-1000x400.jpg"
    },
    {
        id: 3,
        // title: "Ad 4",
        // description: "Description 4",
        imageURL: "https://img.freepik.com/premium-vector/black-friday-ad-panoramic-banner-with-3d-rocket-sale-countdown-wide-wallpaper-with-discount_624052-1592.jpg?w=2000"
    },
    {
        id: 4,
        // title: "Ad 4",
        // description: "Description 4",
        imageURL: "https://www.smartrmail.com/blog/wp-content/uploads/2023/10/Banner-for-blog.png"
    },
  


]

export const benefitsJoining = [
    {
        id: 1,
        title: "Ventaja 1",
        description: "Descripción 1"
    },
    {
        id: 2,
        title: "Ventaja 2",
        description: "Descripción 2"
    },
    {
        id: 3,
        title: "Ventaja 3",
        description: "Descripción 3"
    },
    {
        id: 4,
        title: "Ventaja 4",
        description: "Descripción 4"
    },
]


