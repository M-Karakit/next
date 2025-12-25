import { title } from "process"

export const TourData = {
    category: [
        {
        icon: "/assets/imgs/ic_baseline-public.svg",
        title: "Public Tours",
        isActive: true,
        },
        {
            icon: "/assets/imgs/icon_private tours.svg",
            title: "Private Tours",
        }
    ],
    types: [
        {
            icon: "/assets/imgs/icon_private tours (1).svg",
            title: "Number of people",
            options: [
                { code: "Choose Number"},
                { code: "1 Person"},
                { code: "2 People"},
                { code: "3 People"},
                { code: "4 People"},
                { code: "5 People"},
            ]
        },
        {
            icon: "/assets/imgs/system-uicons_calendar-month.svg",
            title: "Date",
            options: [
                { code: "Choose date" },
                { code: "Today" },
                { code: "Tomorrow" },
                { code: "Next Week" },
                { code: "Next Month" },
            ]
        },
        {
            icon: "/assets/imgs/system-uicons_clock.svg",
            title: "Time",
            options: [
                { code: "Choose time" },
                { code: "(9:00 AM)" },
                { code: "(2:00 PM)" },
                { code: "(6:00 PM)" },
                { code: "(9:00 PM)" },
            ]
        },
        {
            icon: "/assets/imgs/icon _tour.svg",
            title: "Tour",
            options: [
                { code: "Select Tour" },
                { code: "City Tour" },
                { code: "Beach Tour" },
            ]
        },
        {
            icon: "/assets/imgs/icon_car.svg",
            title: "Date",
            options: [
                { code: "Choose Transport" },
                { code: "Car" },
                { code: "Bus" },
            ]
        },
    ],
    search: "/assets/imgs/search-icon.svg"
}