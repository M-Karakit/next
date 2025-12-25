import { FooterProps } from "@/app/interfaces/Footer/Footer";

export const footerData: FooterProps = {
    footerProps: {
        logo: "/assets/imgs/logo (1).svg",
        cols: [
            {
                title: "Services",
                items: [
                    { text: "Bike and Rickshaw rental"},
                    { text: "Guided Tours of Lucca" },
                    { text: "Guided Bike Tour of Lucca" },
                    { text: "Trip In The Tuscan Hills" },
                    { text: "Transportation With Luxury Cars" },
                    { text: "Wine Tours By Bus With Guide" },
                ]
            },
            {
                title: "Home",
                items: [
                    { text: "Home", href: "/" },
                    { text: "About Us", href: "/about" },
                    { text: "Tour Packages" }
                ]
            },
            {
                title: "Help",
                items: [
                    { text: "Terms of Use" },
                    { text: "Privacy Policy" },
                ]
            },
            {
                title: "Contact",
                items: [
                    { icon: "/assets/imgs/location.svg", text: "Piazza Napoleone, Lucca, Tuscany"},
                    { icon: "/assets/imgs/phone.svg", text: "	+39 346 368 5708"},
                    { icon: "/assets/imgs/mail.svg", text: "italiainlimo@gmail.com"},
                ]
            },
            {
                title: "Social Media",
                layout: "row",
                centered: true,
                items: [
                    { icon: "/assets/imgs/twitter.svg"},
                    { icon: "/assets/imgs/facebook.svg"},
                    { icon: "/assets/imgs/instagram.svg"},
                ]
            },
        ],
        bottom: {
            text: "© 2024 Company Name. All rights reserved."
        }
    }
};
