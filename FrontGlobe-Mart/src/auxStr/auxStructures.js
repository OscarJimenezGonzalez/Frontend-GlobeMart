///// Access to context MODIFY 

// setMainData(prevData => ({
//     ...prevData,
//     logged: true
// }))

/////

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(com|es|net)$/;
    return regex.test(email);
};
export function truncateText(text, length) {
    return text.length > length ? text.substring(0, length) + "..." : text;
};

export function isLogged() {

    if (localStorage.getItem("token")) {
        return true
    } else {
        return false
    }

}

export const commercialAds = [

    {
        id: 1,
        // title: "Explore a world of books! ",
        // description: "Enjoy 25% off on all our books!",
        imageURL: "https://www.ngngdesign.com/wp-content/uploads/2020/12/posters.f88ff4f6-2048x640.jpg",
        color: "black"
    },
    {
        id: 2,
        // title: "Christmas has arrived on the website, with festive discounts awaiting!",
        // description: "Enjoy 30% off on all our clothing section!",
        imageURL: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/big-christmas-sale-ad-template-design-9481b5a166e5b63324dbf047f5889262_screen.jpg?ts=1606233818",
        color: "white",
        color2: "lightgray"
    },
    {
        id: 3,
        // title: "Ad 3",
        // description: "Description 3",
        imageURL: "https://img.freepik.com/premium-photo/halloween-shelf-decor-with-copy-space-against-white-wall-banner-background-white-shelf-with-pumpkin-spider-candle-decor-wide-banner-background-halloween_685067-4541.jpg?w=1380",
        // position: top subir arriba esto
    },
    {
        id: 4,
        // title: "Ad 4",
        // description: "Description 4",
        imageURL: "https://www.vie-aesthetics.com/wp-content/uploads/2023/01/Full-Width-Website-4-1000x400.jpg"
    },
    {
        id: 5,
        // title: "Ad 4",
        // description: "Description 4",
        imageURL: "https://img.freepik.com/premium-vector/black-friday-ad-panoramic-banner-with-3d-rocket-sale-countdown-wide-wallpaper-with-discount_624052-1592.jpg?w=2000"
    },
    {
        id: 6,
        // title: "Ad 4",
        // description: "Description 4",
        imageURL: "https://www.smartrmail.com/blog/wp-content/uploads/2023/10/Banner-for-blog.png"
    },
    {
        id: 7,
        // title: "Ad 4",
        // description: "Description 4",
        imageURL: "https://cdn.mos.cms.futurecdn.net/ixA8UQwcAMKcHJBQy6JumW.jpeg"
    }

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


