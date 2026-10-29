// =====================================================================
// PARTE 1 - O QUE SÃO PROPS?  (exemplo pronto para estudar)
// =====================================================================
//
// "Props" (propriedades) são os DADOS que um componente PAI envia
// para um componente FILHO. Funcionam como os ATRIBUTOS do HTML:
//
//     HTML:   <img src="foto.png" alt="Minha foto" />
//     React:  <Saudacao nome="Maria" />
//
// O componente recebe todas as props dentro de UM objeto.
// Por isso escrevemos  function Saudacao(props)  e usamos  props.nome
//
// Regras importantes:
//   1) Props são SOMENTE LEITURA. O filho NUNCA altera uma prop.
//   2) Quem decide o valor da prop é sempre o PAI (quem usa o componente).
//   3) Para mostrar uma prop no JSX, usamos chaves:  {props.nome}
// =====================================================================

function Saudacao(props) {
  // Dica: descomente a linha abaixo, salve e abra o Console do navegador (F12).
  // Você vai ver que "props" é só um objeto JavaScript comum!
  // console.log(props)
 
  return (
    <p>
      Olá, <strong>{props.nome}</strong>! Seja bem-vindo(a).
    </p>
  )
}

export default Saudacao
