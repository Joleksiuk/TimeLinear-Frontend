import styled from 'styled-components'
export const CalendarTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const HeaderCell = styled.th`
    padding: 8px;
    text-align: center;
`

export const BodyCell = styled.td`
    padding: 8px;
    text-align: center;
    border: 1px solid #23263d;
    width: 40px !important;
    &:hover {
        background-color: #41427d;
    }
`
