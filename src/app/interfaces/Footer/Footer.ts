export interface FooterProps {
    footerProps: {
        logo: string;
        cols: Array<{
            title: string;
            layout?: 'row' | 'col'
            centered?: boolean;
            items: Array<{
                text?: string;
                icon?: string;
                href?: string;
            }>;
        }>;
        bottom: {
            text: string;
        };
    }
}
