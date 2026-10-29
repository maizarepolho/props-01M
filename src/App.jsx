// =====================================================================
//  ATIVIDADE 01 - PROPS NO REACT
// =====================================================================
//
// Este é o componente PAI. É aqui que USAMOS os componentes e
// ENVIAMOS as props para eles.
//
// Como fazer a atividade:
//   1. Rode o projeto:  npm install  e depois  npm run dev
//   2. Procure pelos comentários  ✏️ TAREFA  (aqui e na pasta components/)
//   3. Faça as tarefas NA ORDEM (Parte 1, 2, 3, 4 e 5)
//   4. Salve o arquivo e veja o resultado no navegador
//
// Dica: use Ctrl+Shift+F no VS Code e pesquise por "TAREFA"
//       para encontrar todos os lugares que você precisa alterar.
// =====================================================================

import Saudacao from './components/Saudacao.jsx'
import CartaoAluno from './components/CartaoAluno.jsx'
import Produto from './components/Produto.jsx'
import Botao from './components/Botao.jsx'

const turma= [
  { id: 1, nome: 'Bia',   curso: 'Front-end', idade: 18, foto: 'https://i.pravatar.cc/150?img=5'  },
  { id: 2, nome: 'Davi',  curso: 'Back-end',  idade: 19, foto: 'https://i.pravatar.cc/150?img=8'  },
  { id: 3, nome: 'Luana', curso: 'Mobile',    idade: 17, foto: 'https://i.pravatar.cc/150?img=9'  },
]


function App() {
  return (
    <div className="container">
      <h1>Atividade: Props no React</h1>

      {/* ============================================================
          PARTE 1 - Saudacao (arquivo: components/Saudacao.jsx)
          ============================================================
          O mesmo componente, usado 2 vezes, com props DIFERENTES.
          Repare: o componente é um só, mas o resultado muda!        */}
      <section className="parte">
        <h2>Parte 1 - Minha primeira prop</h2>

        <Saudacao nome="Rebeca" />
        <Saudacao nome="Pedro" />

        {/* ✏️ TAREFA 1.1
            Adicione mais um <Saudacao /> aqui embaixo com o SEU nome.  */}
      <section className='parte'>
        <h2> Parte 2 - Meu nome</h2>
        <Saudacao nome="Maiza"/>
      </section>
        {/* ✏️ TAREFA 1.2
            O que acontece se você usar <Saudacao /> SEM a prop nome?
            Teste aqui e anote a resposta neste comentário:
            Resposta: ...                                                */}
      </section>

      {/* ============================================================
          PARTE 2 - CartaoAluno (arquivo: components/CartaoAluno.jsx)
          ============================================================
          ATENÇÃO: texto vai entre aspas  -> curso="Front-end"
                   número vai entre chaves -> idade={17}              */}
      <section className="parte">
        <h2>Parte 2 - Várias props</h2>

        <div className="linha">
          <CartaoAluno
            nome="Rebeca"
            curso="Ciencia da computação"
            idade={19}
            foto="https://i.pravatar.cc/150?img=12 "
          />

          {/* ✏️ TAREFA 2.4
              Complete este cartão: adicione as props idade e foto.
              Para a foto, você pode usar: https://i.pravatar.cc/150?img=12  */}
          <CartaoAluno 
          nome="Mateus" 
          curso="Front-end"
          idade={20} 
          foto=" https://i.pravatar.cc/150?img=12 "/>
             
          {/* ✏️ TAREFA 2.5
              Crie um terceiro <CartaoAluno /> com os SEUS dados.          */}
              <CartaoAluno
              nome="Maiza"
              curso= "TI"
              idade={15}
              foto= " https://i.pravatar.cc/150?img=12 "/>
        </div>
      </section>

      {/* ============================================================
          PARTE 3 - Produto (arquivo: components/Produto.jsx)
          ============================================================ */}
      <section className="parte">
        <h2>Parte 3 - Props que mudam o comportamento</h2>

        <div className="linha">
          <Produto nome="Teclado Mecânico" preco={249.9} emPromocao={true} />
          <Produto nome="Mouse Gamer" preco={129.9} emPromocao={false} />

          {/* ✏️ TAREFA 3.4
              Este produto NÃO envia a prop emPromocao.
              Depois de fazer a TAREFA 3.1, o selo aparece ou não? Por quê?
              Resposta: ...                                                */}
          <Produto nome="Monitor 24''" preco={899} />

          {/* ✏️ TAREFA 3.5
              Crie um produto em promoção usando a forma curta:
              <Produto nome="..." preco={...} emPromocao />              */}
               <Produto nome="Paçocas 24''" preco={908} />
        </div>
      </section>

      {/* ============================================================
          PARTE 4 - Botao (arquivo: components/Botao.jsx)
          ============================================================ */}
      <section className="parte">
        <h2>Parte 4 - children e funções como props</h2>

        <div className="linha">
          <Botao cor="azul" aoClicar={() => alert('Você clicou em Salvar!')}>
            Salvar
          </Botao>

          <Botao cor="vermelho" aoClicar={() => alert('Item excluído!')}>
            Excluir
          </Botao>

          <Botao cor="verde" aoClicar={()  => alert('Formulário enviado!')}>
             Enviar
          </Botao>

          {/* ✏️ TAREFA 4.3
              Crie um botão VERDE com o texto "Enviar" que, ao ser clicado,
              mostre um alert com a mensagem "Formulário enviado!".        */}

        </div>
      </section>

      {/* ============================================================
          PARTE 5 - DESAFIO: props + listas (.map)
          ============================================================
          Na vida real os dados quase nunca são escritos "na mão".
          Eles vêm de uma lista (array), por exemplo, de uma API.

          ✏️ TAREFA 5 (desafio)
            1. Crie, ACIMA do "function App()", uma constante:

                 const turma = [
                   { id: 1, nome: 'Bia',   curso: 'Front-end', idade: 18, foto: 'https://i.pravatar.cc/150?img=5'  },
                   { id: 2, nome: 'Davi',  curso: 'Back-end',  idade: 19, foto: 'https://i.pravatar.cc/150?img=8'  },
                   { id: 3, nome: 'Luana', curso: 'Mobile',    idade: 17, foto: 'https://i.pravatar.cc/150?img=9'  },
                 ]

            2. Aqui embaixo, use turma.map() para criar um <CartaoAluno />
               para cada aluno, passando as props a partir do objeto:

                 {turma.map((aluno) => (
                   <CartaoAluno
                     key={aluno.id}
                     nome={aluno.nome}
                     ...complete as outras props...
                   />
                 ))}

            Por que precisa da prop "key"? Pesquise e responda:
            Resposta: serve basicamente para identificar de forma única cada elemento em um conjunto
          ============================================================ */}
           {turma.map((aluno) => (
                   <CartaoAluno
                     key={aluno.id}
                     nome={aluno.nome}
                   />
                 ))}


      <section className="parte">
        <h2>Parte 5 - Desafio: lista de alunos</h2>

        <div className="linha">
          {turma.map}
        </div>
      </section>
    </div>
  )
}

export default App
