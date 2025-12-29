import { BookBikeProps } from "@/app/interfaces/BookBike/BookBike";

export const bookData: BookBikeProps = {
    bookBikeProps: {
        title: "Book Now Bike",
        inputs: [
            {
                type: "text",
                id: "name",
                name: "Name and Surname",
                placeholder: "Enter your name and surname",
                required: true,
            },
            {
                type: "email",
                id: "email",
                name: "Email Address",
                placeholder: "Enter your email address",
                required: true,
            },
            {
                type: "tel",
                id: "tel",
                name: "Telephone Number",
                placeholder: "Enter your telephone number",
                required: true,
            },
            {
                type: "select",
                id: "service",
                name: "Service Type",
                placeholder: "Select the service types",
                required: true,
                icon: "/assets/imgs/arrow-down.svg"
            },
            {
                type: "text",
                id: "date",
                name: "Date",
                placeholder: "Select the date",
                required: true,
                icon: "/assets/imgs/system-uicons_calendar-month.svg"
            },
            {
                type: "text",
                id: "time",
                name: "Time",
                placeholder: "Select the time",
                required: true,
                icon: "/assets/imgs/system-uicons_clock.svg"
            },
        ],
        button: {
            text: "Book Now"
        },
        image: "/assets/imgs/bike-image.png"
    }
}