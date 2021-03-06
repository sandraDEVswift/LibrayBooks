import * as React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { ButtonColor, ButtonSize, ButtonType, ButtonTheme } from "./types";
import { StyledButton } from "./styles";

const Button = props => {
  const {
    action,
    children,
    disabled,
    classNames,
    color,
    size,
    customColor, 
    theme, 
    outline
  } = props;
  const btnColor = outline ? `btn-outline-${color}` : `btn-${color}`
  const classProps = classnames(btnColor, size, classNames);
  return (
    <StyledButton
      onClick={action}
      disabled={disabled}
      className={`btn ${classProps}`}
      customColor={customColor}
      theme={theme}>
      {children}
    </StyledButton>
  );
};

const { PRIMARY, LIGHT, SECONDARY, INFO, SUCCESS, WARNING, DANGER, LINK } = ButtonColor
const { BUTTON } = ButtonType
Button.PRIMARY = (props) => {
  return <Button type={BUTTON} color={PRIMARY} {...props}></Button>;
}
Button.LIGHT = (props) => {
  return <Button type={BUTTON} color={LIGHT} {...props}></Button>;
}
Button.SECONDARY = (props) => {
  return <Button type={BUTTON} color={SECONDARY} {...props}></Button>;
}
Button.INFO = props => {
  return <Button type={BUTTON} color={INFO} {...props}></Button>;
};
Button.SUCCESS = props => {
  return <Button type={BUTTON} color={SUCCESS} {...props}></Button>;
};
Button.WARNING = props => {
  return <Button type={BUTTON} color={WARNING} {...props}></Button>;
}
Button.DANGER = props => {
  return <Button type={BUTTON} color={DANGER} {...props}></Button>;
};
Button.LINK = props => {
  return <Button type={BUTTON} color={LINK} {...props}></Button>;
};
Button.DISMISSIBLE = props => {
  return (<Button type="button" classNames="close" data-dismiss="alert" aria-label="Close" {...props}>
            <span aria-hidden="true">&times;</span>
          </Button>)
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  theme: PropTypes.string,
  color: PropTypes.string,
  customColor: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
Button.defaultProps = {
  type: ButtonType.BUTTON,
  disabled: false,
  theme: ButtonTheme.DEFAULT,
  onClick: () => { }
};

export {
  ButtonSize, 
  ButtonTheme
}
export default Button;
