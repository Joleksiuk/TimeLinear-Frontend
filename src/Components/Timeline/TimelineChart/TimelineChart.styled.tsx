import styled from 'styled-components'

export const ContainerStyled = styled.div`
    display: flex;
    gap: 20px;
`

export const NameAndDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

type BaseProps = {
    display: boolean
}

export type CircleProps = {
    width: number
    height: number
} & BaseProps

export const CircleRootStyled = styled.div<CircleProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: ${(props) => props.height}px;
    background-image: ${(props) =>
        props.display && 'linear-gradient(200deg, #5b7add, #5b7add)'};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export type InnerCircleProps = {
    width: number
    height: number
}

export const InnerCircleRootStyled = styled.div<InnerCircleProps>`
    width: calc(100% - ${(props) => props.width}px);
    height: calc(100% - ${(props) => props.width}px);
    border-radius: ${(props) => props.width}px;
    background-color: #121529;
`
export type LineProps = {
    width: number
    height: number
    rootMargin: number
} & BaseProps

export const ElementsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BranchContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LineStyled = styled.div<LineProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 10px;
    background-image: linear-gradient(200deg, #5b7add, #5b7add);
    margin-top: -${(props) => props.rootMargin}px;
`
export type BranchProps = {
    width: number
    height: number
} & BaseProps

export const BranchStyled = styled.div<BranchProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 10px;
    margin: -10px;
    background-image: ${(props) =>
        props.display && 'linear-gradient(200deg, #5b7add, #5b7add)'};
    position: relative;
`

export const EventDataContainer = styled.div<BaseProps>`
    color: ${(props) => (props.display ? 'white' : '#121529')};
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
`

export const DateStyled = styled.div<BaseProps>`
    color: ${(props) => (props.display ? '#ffffff' : '#121529')};
    font-size: 25px;
`
export const EventNameStyled = styled.div<BaseProps>`
    color: ${(props) => (props.display ? '#4c58aa' : '#121529')};
    font-size: 30px;
`
export const DescriptionStyled = styled.div<BaseProps>`
    color: ${(props) => (props.display ? '#5d6074' : '#121529')};
    font-size: 20px;
`
