import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@babel/core'
import Button from './Button';

test('Verifica se o botão alterna entre ON e OFF ao ser clicado', () => {
    const { getByText } = render(<Button />);

    //verifica se o botão inicia com o texto "OFF"
    expect(getByText('OFF')).toBeInTheDocument();

    // simula um clique no botão
    fireEvent.click(getByText('OFF'));

    //verifica se o texto do botão muda para "ON"
    expect(getByText('ON')).toBeInTheDocument();

    //Simula outro clique no botão
    fireEvent.click(getByText('ON'));

    // Verifica se o texto do botão muda novamente para "OFF"
    expect(getByText('OFF')).toBeInTheDocument();
    
})