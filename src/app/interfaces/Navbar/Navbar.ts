export interface NavbarProps {
    navProps: {
        logo: string;
        links: Array<{
            name: string;
            path: string;
        }>;
        lang: Array<{
            code: string;
            name: string;
        }>;
        buttons: Array<{
            text: string;
            isActive?: boolean;
        }>,
    }
}