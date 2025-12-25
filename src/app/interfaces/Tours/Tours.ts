export interface TourProps {
    tourProps: {
        category: Array<{
            icon: string;
            title: string;
            isActive?: boolean;
        }>,
        types: Array<{
            icon: string;
            title: string;
            options?: Array<{
                code: string;
            }>
        }>
        search: string;
    }
}