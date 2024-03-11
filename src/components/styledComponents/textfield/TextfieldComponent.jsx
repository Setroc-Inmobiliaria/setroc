import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(0),
  },
  '& .MuiInputBase-input': {
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
    // Use the system font instead of the default Roboto font.

    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  width: '100%'
}));

// eslint-disable-next-line react/prop-types
const TextFieldComponent = ({ placeholder, setData, name, value, type }) => {


  const setInputValue = (e) => {
   setData(e.target.value)
  }



  return (


    <BootstrapInput onChange={setInputValue} name={name} placeholder={placeholder} value={value} type={type ? type : "text"}/>

  );
};

export default TextFieldComponent;
