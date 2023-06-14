import React from "react";


export default function NavBarItem() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand ml-5" href="#">FCP web library</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Home">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Usuários</a>
                    </li>
                    <li classNameName="nav-item active">
                        <a className="nav-link" href="/ListBooks">Livros</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Sair</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}