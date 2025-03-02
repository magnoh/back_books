import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]

const Icone = styled.li`
    margin-right: 30px;
    width: 25px
`
const Icones = styled.ul`
    display: flex;
    align-items: center;   
`

function IconesHeader(){
    return(
        <Icones>
            {icones.map((icones) => (
              <Icone><img src={icones}></img></Icone>
            ))}
        </Icones>
    )

}

export default IconesHeader