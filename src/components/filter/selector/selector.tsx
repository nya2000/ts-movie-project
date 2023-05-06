import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { nanoid } from 'nanoid';

type Options = {
    label: string;
    value: string;
};

type SelectorProps = {
    options: Options[];
    value: string | undefined;
    onChange: (value: string) => void;
};

const Selector = ({ options, value, onChange }: SelectorProps) => {
    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth size='small'>
            <Select
                value={value}
                onChange={handleChange}
                sx={{
                    m: '10px 0',
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                        color: 'white',
                    },
                    width: '220px',
                }}
            >
                {options.map((option) => (
                    <MenuItem key={nanoid()} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Selector;
