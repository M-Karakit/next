export interface FormInputs {
    type: 'text' | 'email' | 'password' | 'select' | 'tel';
    id: string;
    name: string;
    icon?: string;
    placeholder: string;
    required?: boolean;
}

export interface BookBikeProps {
    bookBikeProps: {
        title: string,
        inputs: Array<FormInputs>;
        button: {
            text: string;
        };
        image: string;
    }
}