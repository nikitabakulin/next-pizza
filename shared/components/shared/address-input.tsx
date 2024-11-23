'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
    return (
        <AddressSuggestions
            token="92b5690aa03f721665d5ca80f30fe9adf0f9bfe4"
            onChange={(data) => onChange?.(data?.value)}
        />
    );
};