'use client';

import { registerUser } from "@/app/actions";
import { Button, FormInput, formRegisterSchema, TFormRegisterValues, Title } from "@/shared/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";


interface Props {
    onClose?: VoidFunction;
}
  
export const RegisterForm: React.FC<Props> = ({ onClose }) => {
    const form = useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            email: '',
            fullName: '',
            password: '',
            confirmPassword: '',
        },
    });
  
    const onSubmit = async (data: TFormRegisterValues) => {
        try {
            await registerUser({
                email: data.email,
                fullName: data.fullName,
                password: data.password,
            });
    
            toast.error('Регистрация успешна 📝. Подтвердите свою почту', {
                icon: '✅',
            });
    
            onClose?.();
        } catch (error) {
            return toast.error('Неверный E-Mail или пароль', {
                icon: '❌',
            });
        }
    };
  
    return (
        <FormProvider {...form}>
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex justify-between items-center">
                    <div className="mr-2">
                        <Title text="Регистрация" size="md" className="font-bold" />
                        <p className="text-gray-400">Введите свою почту, чтобы создать аккаунт</p>
                    </div>
                    <img src="/assets/images/phone-icon.png" alt="phone-icon" width={60} height={60} />
                </div>


                <FormInput name="email" label="E-Mail" required />
                <FormInput name="fullName" label="Полное имя" required />
                <FormInput name="password" label="Пароль" type="password" required />
                <FormInput name="confirmPassword" label="Подтвердите пароль" type="password" required />
        
                <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
                    Зарегистрироваться
                </Button>
            </form>
        </FormProvider>
    );
};