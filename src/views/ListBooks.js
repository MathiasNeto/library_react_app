import React, {useEffect, useState}from "react";
import NavBarItem from "./NavBarItem";
import { getAll } from "../services/LivroService";

export default function ListBooks() {
    return (
        <>
            <NavBarItem />

            <div className="container mt-5">
                <div className="mb-3">
                    <button type="button" className="btn btn-dark btn-sm">
                        Cadastrar Novo
                    </button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>ISBN</th>
                            <th>Area</th>
                            <th scope="col" className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">


                        <tr>
                            <td>Padroes de Projeto</td>
                            <td>999</td>
                            <td>Exatas</td>
                            <td>
                                <div className="text-center">
                                    <button
                                        className="btn btn-secondary me-4"
                                        onClick={() => (window.location.href = 'cadastraLivro.html')}
                                    >
                                        Editar
                                    </button>
                                    <button className="btn btn-danger">Excluir</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>


    )
}