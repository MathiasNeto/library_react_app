import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Card from "./Card";


const CadastroLivro = () => {
 
  const valueLivro = {
    name: '',
    area: '',
    isbn: '',
  }

  const [livro, setValues] = useState(valueLivro)

  function onChange(ev) {
    const { name, value } = ev.target
    setValues({ ...livro, [name]: value })
    
  }
  function sendValues(ev) {
    ev.preventDefault();
    valueLivro.area = livro.area
    valueLivro.isbn = livro.isbn
    valueLivro.name = livro.name
    console.log(valueLivro)
}

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <Card titulo="Cadastro de Livros" className="mb-4">
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    name="name"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="isbn">ISBN:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="isbn"
                    name="isbn"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="area">Área:</label>
                  <select
                    className="form-control"
                    id="area"
                    name="area"
                    onChange={onChange}
                    required
                  >
                    <option value="">Selecione a Área</option>
                    <option value="HUMAN">Humanas</option>
                    <option value="EXACT_SCIENCES">Exatas</option>
                  </select>
                </div>

                <div className="d-flex justify-content-center">
                  <button onClick={sendValues} className="btn btn-primary btn-lg mt-3">
                    Salvar
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}



export default CadastroLivro;
