export interface CompanySectionProps {
    companyProps: {
        image: string;
        text: string;
        title: string;
        description: string;
        info: Array<{
            number: string;
            text: string;
        }>
    }
}