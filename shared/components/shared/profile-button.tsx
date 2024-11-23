import { useSession } from 'next-auth/react';
import React from 'react';
import { Button } from '..';
import { CircleUser, User } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';

interface Props {
    onClickSignIn?: () => void;
    className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className, onClickSignIn }) => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    return (
        <div className={cn('flex items-center min-h-[30px]', className)}>
            {
                loading && <div className="w-[100px] h-[40px] bg-secondary rounded-sm animate-pulse" />     
            }
            {
                !loading && !session
                    ? (
                        <Button onClick={onClickSignIn} variant="outline" className="flex items-center gap-1">
                            <User size={16} />
                            Войти
                        </Button>
                    ) 
                    : (
                        !loading && session && (
                            <Link href="/profile">
                                <Button variant="secondary" className="flex items-center gap-2">
                                    <CircleUser size={18} />
                                    Профиль
                                </Button>
                            </Link>
                        )
                        
                    )
            }
        </div>
    )
};