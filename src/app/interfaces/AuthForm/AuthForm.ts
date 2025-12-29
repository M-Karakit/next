export interface AuthInput {
    type: 'text' | 'email' | 'password';
    id: string;
    name: string;
    placeholder: string;
    required?: boolean;
}

export interface AuthFormProps {
    authFromProps: {
        header: {
            text: string;
            close: string;
        },
        inputs: Array<AuthInput>
        checkbox?: {
            parts: Array<{
                text: string;
                color: 'normal' | 'orange';
            }>;
            checked: boolean;
        };
        signButton: {
            text: string;
        };
        forgetPass?: string;
        googleSign: {
            icon: string;
            text: string;
        };
        footer: {
            text: string;
            link: {
                text: string;
                href: string;
            };
        }
    }
}