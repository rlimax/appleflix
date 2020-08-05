import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(infoEvento) {
    // console.log('[nomeDaCategoria]',nomeCategoria);
    // console.log('[infosDoEvento]',infoEvento.target.value);
    // setNomeCategoria(infoEvento.target.value);
    const { getAttribute, value } = infoEvento.target;
    setValue(
      getAttribute('name'),
      value,
    );
  }
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        // console.log('Tentativa de envio - Formulario');
        setCategoria([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição
            <br />
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.nome}
          onChange={handleChange}
        />
        <br />

        <Button>Cadastrar</Button>
        <br />
        <br />
      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">Voltar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
