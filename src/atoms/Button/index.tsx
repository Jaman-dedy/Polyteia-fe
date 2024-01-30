import Stack from '@mui/material/Stack';
import { BootstrapButton } from './Button';

interface Props {
    label: string,
    startIcon: React.ReactElement,
    onClick?: () => void
}

const CustomizedButtons: React.FC<Props> = ({label, startIcon, onClick}) => {
  return (
    <Stack sx={{marginLeft: 2}} spacing={2} direction="row">
      <BootstrapButton onClick={onClick} startIcon={startIcon} variant="contained" disableRipple>
        {label}
      </BootstrapButton>
    </Stack>
  );
}

export default CustomizedButtons