import { Button } from '@pankod/refine-mui';
import { CustomButtonProps } from "interfaces/common";

const CustomButton = ({ type, title, handleClick, backgroundColor, fullWidth, color, icon, disabled }: CustomButtonProps) => {
  const sx = {
    flex: fullWidth ? 1 : 'unset',
    padding: '10px 15px',
    width: fullWidth ? '100%' : 'fit-content',
    minWidth: 130,
    backgroundColor,
    color,
    fontSize: 16,
    fontWeight: 600,
    gap: '10px',
    textTransform: 'capitalize',
    '&:hover': {
      opacity: 0.9, backgroundColor
    }
  }
  const button_type = type === "submit" ? 'submit' : "button";
  return (
    <Button onClick={handleClick} type={button_type} sx={sx} disabled={disabled}>
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton
