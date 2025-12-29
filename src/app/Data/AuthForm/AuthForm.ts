import { AuthFormProps } from "@/app/interfaces/AuthForm/AuthForm";

export const SignupData: AuthFormProps = {
    authFromProps: {
        header: {
            text: "Create Account",
            close: "/assets/imgs/close-form.svg"
        },
        inputs: [
            {
                type: "text",
                id: "name",
                name: "Name and Surname",
                placeholder: "Enter your name and surname",
                required: true
            },
            {
                type: "email",
                id: "email",
                name: "Email Address",
                placeholder: "Enter your email address",
                required: true
            },
            {
                type: "password",
                id: "password",
                name: "Password",
                placeholder: "Enter your password",
                required: true
            },
        ],
        checkbox: {
            parts: [
                { text: "I agree with ", color: "normal" },
                { text: "Terms", color: "orange" },
                { text: " and ", color: "normal" },
                { text: "Privacy", color: "orange" }
            ],
            checked: false,
        },
        signButton: {
            text: "Sign Up"
        },
        googleSign: {
            icon: "/assets/imgs/google-icon.svg",
            text: "Sign Up with Google"
        },
        footer: {
            text: "Already have an account? ",
            link: {
                text: "Log In",
                href: "/login"
            }
        }
    }
}

export const LoginData: AuthFormProps = {
    authFromProps: {
        header: {
            text: "Login",
            close: "/assets/imgs/close-form.svg"
        },
        inputs: [
            {
                type: "email",
                id: "email",
                name: "Email Address",
                placeholder: "Enter your email address",
                required: true
            },
            {
                type: "password",
                id: "password",
                name: "Password",
                placeholder: "Enter your password",
                required: true
            },
        ],
        signButton: {
            text: "Sign In"
        },
        forgetPass: "Forget Your Password",
        googleSign: {
            icon: "/assets/imgs/google-icon.svg",
            text: "Sign Up with Google"
        },
        footer: {
            text: "Don’t have an account? ",
            link: {
                text: "Sign Up",
                href: "/signup"
            }
        }
    }
}