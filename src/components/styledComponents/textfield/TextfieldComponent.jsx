import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const TextFieldComponent = ({ label}) => {
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

  return (
 
  
      <BootstrapInput id="bootstrap-input"/>
   
  );
};

export default TextFieldComponent;
