import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const TextAreaComponent = ({ label, value }) => {
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
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    minHeight: 100,
    minWidth: '100%'
  }));

  return (
   
      <BootstrapTextarea value={value} />
 
  );
};

export default TextAreaComponent;
