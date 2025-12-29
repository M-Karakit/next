import AuthForm from "@/app/components/AuthForm/AuthForm";
import { LoginData } from "@/app/Data/AuthForm/AuthForm";

export default function login() {
    return (
        <section className="flex justify-center items-center h-screen bg-black/80">
            <AuthForm authFromProps={LoginData.authFromProps}/>
        </section>
    )
}