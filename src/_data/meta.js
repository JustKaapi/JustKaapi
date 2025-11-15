const meta = {
    title: "Just Kaapi | Ramyam Soaps",
    favicon: "./assets/site/favicon.png",
    og: {
        title: "Just Kaapi - Ramyam Soaps",
        type: "website",
        url: "https://justkaapi.github.io/",
        image: "https://justkaapi.github.io/assets/site/justkaapi-smb.webp",
        description: "Just Kaapi | Ramyam Soaps | Handmade Soaps, Skincare & Kaapi As Strong As You"
    },
    nav: [
        { title: "Coffee", href: "#Coffee" },
        { title: "Soaps", href: "#Soaps" },
        { title: "Health Mix", href: "#Health-Mix" },
        { title: "Skin Care", href: "#Skin-Care" }
    ],
    social: [
        { type: "whatsapp", visible: true, image: "https://justkaapi.github.io/assets/social/whatsapp.png", href: "https://api.whatsapp.com/message/EGE35SX5C26BD1" },
        { type: "instagram", visible: true, image: "https://justkaapi.github.io/assets/social/instagram.png", href: "https://www.instagram.com/ramyamsoaps" },
        { type: "twitter", visible: true, image: "https://justkaapi.github.io/assets/social/twitter.png", href: "https://x.com/ramyam_naturals" },
        { type: "youtube", visible: false, image: "https://justkaapi.github.io/assets/social/youtube.png", href: "https://x.com/ramyam_naturals" },
        { type: "linkedin", visible: false, image: "https://justkaapi.github.io/assets/social/linkedin.png", href: "https://x.com/ramyam_naturals" },
    ],
    about: {
        title: "Our Story",
        description: "Happiness isn’t always about achieving big dreams but cherishing the journey toward them, knowing that every soap made, every meal cooked, and every coffee served adds to the tapestry of joy."
    },
    shipping: {
        title: "Shipping",
        description: "We partner with India Post for our shipping, shipping charges vary based on your location and it may take 5 - 7 days to deliver your order."
    },
    contact: {
        mailto: "JustKaapiRamyamSoaps@gmail.com",
        whatsapp: "https://api.whatsapp.com/message/EGE35SX5C26BD1"
    }
}

export default function () {
    return meta;
}