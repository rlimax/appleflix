import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';



function CadastroCategoria(){
    return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <form>
          <label>
            <input type="text" /><br /><br />
            <button>Cadastrar</button><br /><br />
          </label>
        </form>
        <Link to="/">Voltar para Home</Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;