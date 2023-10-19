import styled from 'styled-components'
export const CalendarTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`
export type CellParams = {
    isMarked: boolean
}

export const HeaderCellStyled = styled.th`
    padding: 8px;
    text-align: center;
`

export const BodyCell = styled.td<CellParams>`
    padding: 8px;
    text-align: center;
    border: 1px solid #23263d;
    width: 40px !important;
    background-color: ${(props) => (props.isMarked ? '#41427d' : '#121529')};

    &:hover {
        background-color: #41427d;
        cursor: 'pointer';
    }
`
