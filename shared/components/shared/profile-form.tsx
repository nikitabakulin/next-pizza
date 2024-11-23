'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Container, FormInput, formRegisterSchema, TFormRegisterValues, Title } from "..";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { updateUserInfo } from "@/app/actions";

interface Props {
    data: User;
}
  
export const ProfileForm: React.FC<Props> = ({ data }) => {
    const form = useForm({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            fullName: data.fullName,
            email: data.email,
            password: '',
            confirmPassword: '',
        },
    });
  
    const onSubmit = async (data: TFormRegisterValues) => {
        try {
            await updateUserInfo({
                email: data.email,
                fullName: data.fullName,
                password: data.password,
            });
    
            toast.error('Данные обновлены 📝', {
                icon: '✅',
            });

        } catch (error) {
            return toast.error('Ошибка при обновлении данных', {
                icon: '❌',
            });
        }
    };
  
    const onClickSignOut = () => {
        signOut({
            callbackUrl: '/',
        });
    };
  
    return (
        <Container className="my-10 w-full flex flex-col items-center">
            <Title text={`Личные данные | ${data.fullName}`} size="md" className="font-bold" />
    
            <FormProvider {...form}>
                <form className="flex flex-col gap-5 w-96 mt-10" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormInput name="email" label="E-Mail" required />
                    <FormInput name="fullName" label="Полное имя" required />
        
                    <FormInput type="password" name="password" label="Новый пароль" required />
                    <FormInput type="password" name="confirmPassword" label="Повторите пароль" required />
        
                    <Button disabled={form.formState.isSubmitting} className="text-base mt-10" type="submit">
                        Сохранить
                    </Button>
        
                    <Button
                        onClick={onClickSignOut}
                        variant="secondary"
                        disabled={form.formState.isSubmitting}
                        className="text-base"
                        type="button">
                        Выйти из аккаунта
                    </Button>
                </form>
            </FormProvider>
        </Container>
    );
};