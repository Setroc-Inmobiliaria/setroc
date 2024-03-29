/* eslint-disable react/prop-types */
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SlArrowDown } from 'react-icons/sl'
import { alpha } from '@mui/material/styles';

// import colors from "../../../constants/colors";

const SelectComponent = ({ title, items, width, name, setSelected }) => {

    const handleOnChange = (e) => {
        e.preventDefault()
        setSelected(e.target.value)
        // console.log(e.target.value);

    }

    const itemElements = items.map(i => (
        <MenuItem value={i} key={i}>{Number.isInteger(i) ? i : Math.round(i)  }</MenuItem>
    ));


    return (
        <FormControl
            sx={{
                minWidth: "min-content",
                maxWidth: width || "100%",
                width: '100%',
                margin: "0px",
            }}
            size="small"
        >
            <Select
          
                onChange={handleOnChange}
                IconComponent={SlArrowDown}
                sx={{
                    width: "100%",
                    height: "45px",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    borderRadius: "6px",
                    borderWidth: "0px",
                    outline: "0px",
                    border: `2px solid #276296`,
                    '&.Mui-focused': {
                        boxShadow: `${alpha('#67ADD4', 0.25)} 0 0 0 0.2rem`,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: "0px",
                        borderRadius: "6px"
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "0px"
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "0px"
                    },
                    '& .MuiSelect-icon': {
                        fill: '#B2D3E7',
                        marginRight: "5px"
                    },
                    '& .MuiSelect-outlined': {
                        backgroundColor: 'white'
                    },
                    '& .MuiInputBase-input': {
                        borderRadius: "6px"
                    }
                }}
                name={name}
                defaultValue={title}
                variant="outlined"
            >

                <MenuItem value={title}>
                    <em>{title}</em>
                </MenuItem>
                {itemElements}
            </Select>
            {/* {
                error &&
                <Box
                    sx={{
                        padding: "4px 6px",
                        fontSize: "12px",
                        fontFamily: "Inter",
                        color: colors.resalte2
                    }}
                >
                    {errorLabel}
                </Box>
            } */}
        </FormControl>
    )
}

export default SelectComponent;