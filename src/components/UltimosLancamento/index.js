import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import imagemLivro from '../../images/livro2.png'
import CardRecomenda from '../CardRecomenda'
import styled from "styled-components"



const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#000"
                tamanhoFonte="36px"
                alinhamento="center"
            >
                ULTIMOS LANCAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talves você se interesse por"
                subtitulo="Angular 11"
                descricao="Contruindo uma aplicação"
                img={imagemLivro}
            />

        </UltimosLancamentosContainer>
        
    )
}

export default UltimosLancamentos