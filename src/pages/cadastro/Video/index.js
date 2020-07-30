import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo(){
    return (
      <PageDefault>
        <h1>Cadastro de Videos</h1>
        <Link to="/cadastro/Categoria">
          Inserir Categoria
        </Link>
      </PageDefault>
    );
  }

  export default CadastroVideo;