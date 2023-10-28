import styled from 'styled-components'

export const EventFormContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`
type Props = {
    isInModal: boolean
}
export const ContainerStyled = styled.div<Props>`
    display: flex;
    flex-direction: ${(props) => (props.isInModal ? 'column' : 'row')};
    gap: 20px;
`

export const NameAndDateContainer = styled.div`
    display: flex;
    gap: 20px;
`
