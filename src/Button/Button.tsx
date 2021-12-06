import styled from "@emotion/styled"
import { typography, space, color, ColorProps, ColorStyleProps } from 'styled-system'
import { StyledSystemProps } from "../util/models/StyledSystem"


export interface ButtonProps extends StyledSystemProps {
    children: any;
    onClick?: (e: Event) => void;
    corpo?: boolean;
}

const StyledButton = styled.button(
    props => ({
        borderRadius: props.corpo ? "15px" : "0px"
    }),
    typography,
    space,
    color
)

export const Button = ({ children, corpo, ...props }: ButtonProps) => {
    return <StyledButton {...{ corpo, ...props }}>{children}</StyledButton>
}