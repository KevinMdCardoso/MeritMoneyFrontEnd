/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
    primary,
    secundary,
    dark,
    clean,
    hover,
    brancoEscuro,
} from '../../styles/Paleta';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    background-color: ${brancoEscuro};
    margin: 0;
    padding: 10px 0;
    min-height: 76vh;
`;

export const Detalhes = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${clean};
    width: 65%;
    padding-top: 5px;
    border-radius: 15px;

    h2 {
        font-weight: 500;
        font-size: 18px;
        padding: 5px 20px;
    }
`;

export const Cabecalho = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
    padding-top: 15px;

    h1 {
        padding-top: 10px;
        font-size: 18px;
        font-weight: 400;
    }
    input {
        border: 2px solid ${secundary};
        border-radius: 12px;
        height: 40px;
        max-width: 12%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        text-align: center;
        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
`;

export const Botoes = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    padding: 20px 5px;

    a {
        text-decoration: none;
        color: ${clean};
        font-size: 15px;
        min-width: 40%;
        height: 40px;
    }

    button {
        background-color: ${primary};
        color: ${clean};
        border-radius: 20px;
        width: 100%;
        border: 0 none;
        cursor: pointer;
        &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
        &:hover {
            background-color: ${hover};
            opacity: 0.8;
        }
    }
`;

export const Voltar = styled.div`
    width: 100vw;
    background-color: #e3e3e3;
    padding-top: 4px;
    a {
        margin-left: 17.5%;
        display: flex;
        flex-direction: row;
        color: ${primary};
        text-decoration: none;
        white-space: nowrap;
        svg {
            margin-right: 7px;
        }
    }
`;
