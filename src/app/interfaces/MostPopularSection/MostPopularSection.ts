export interface MostPopularCardProps {
    mostPopularProps: {
        cover: string;
        title: string;
        payment: {
            currency: string;
            amount: number;
            period: string;
        },
        info: Array<Array<{
            icon: string;
            text: string;
        }>>,
        button: {
            text: string;
        }
    }
}

export interface mostPopularSectionProps {
    sectionHeader: string;
}