import styled from "styled-components";
import {  ButtonTheme } from "./types";

export const StyledButton = styled.button`
    background: ${props => props.customColor && props.customColor}!important;
    border-color: ${props => props.customColor && props.customColor}!important;
    border-radius: ${props => {
        switch(props.theme) {
            case ButtonTheme.RADIUS: return '10px'
            case ButtonTheme.ROUNDED: return '20px'
            default: return
        }
    }};
    color: white;
`;