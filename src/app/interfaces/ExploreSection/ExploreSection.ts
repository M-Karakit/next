export interface ExploreCardProps {
    cards: {
        cover: string;
        title: string;
        text: string;
        price: string;
        date: {
            icon: string;
            text: string;
        };
        people: {
            icon: string;
            text: string;
        };
        description: string;
    }
}

export interface ExploreSectionProps {
    sectionHeader: string;
}