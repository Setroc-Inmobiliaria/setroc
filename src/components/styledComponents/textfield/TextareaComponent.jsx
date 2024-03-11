
import { alpha, styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";



const BootstrapTextarea = styled(TextareaAutosize)(({ theme }) => ({
  borderRadius: 4,
  position: 'relative',
  backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
  border: '1px solid',
  borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
  fontSize: 16,
  padding: '10px 12px',
  transition: theme.transitions.create([
    'border-color',
    'background-color',
    'box-shadow',
  ]),
  minHeight: 100,
  minWidth: '100%',
  '&:focus': {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  },
}));

// eslint-disable-next-line react/prop-types
const TextAreaComponent = ({ setData, value, name }) => {

  const handleOnChange = (e)  => {
    setData(e.target.value);
  };

  return (
    <BootstrapTextarea
      value={value}
      onChange={handleOnChange}
      name={name}
      // placeholder={label}
    />
  );
};

export default TextAreaComponent;
