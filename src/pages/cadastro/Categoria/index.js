import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';



function CadastroCategoria(){

  const [categorias, setCategoria] = useState(['Teste']);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor,
      })
  }
  function handlerChange(infoEvento){
    //console.log('[nomeDaCategoria]',nomeCategoria);
    //console.log('[infosDoEvento]',infoEvento.target.value);
    //setNomeCategoria(infoEvento.target.value);
    setValue(
      infoEvento.target.getAttribute('name'), 
      infoEvento.target.value
    );
  }
    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        <form onSubmit={function handleSubmit(infoEvento){
          infoEvento.preventDefault();
          //console.log('Tentativa de envio - Formulario');
          setCategoria([
            ...categorias,
            values.nome
          ])
        }}>

          <div>
            <label>
              Nome da categoria<br />
              <input 
                type="text" 
                name="nome"
                value={values.nome}
                onChange={handlerChange} />
              <br /><br />
            </label>
          </div><br /><br />
          <div>
            <label>
              Descrição<br />
              <textarea
                type="text" 
                name="descricao"
                value={values.categoria}
                onChange={handlerChange} />
            </label>
          </div><br />
          <div>
            <label>
              Cor:<br />
              <input
                type="color" 
                name="cor"
                value={values.cor}
                onChange={handlerChange} />
            </label>
          </div><br />
          <button>Cadastrar</button><br /><br />
        </form>
        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
            )
          })}
        </ul>
        <Link to="/">Voltar para Home</Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;