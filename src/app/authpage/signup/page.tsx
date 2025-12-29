import AuthForm from "@/app/components/AuthForm/AuthForm";
import { SignupData } from "@/app/Data/AuthForm/AuthForm";

export default function signup() {
    return (
        <section className="flex justify-center items-center h-screen bg-black/80">
            <AuthForm authFromProps={SignupData.authFromProps}/>
        </section>
    )
}