import { useState } from 'react';
import './index.css';

const cities = [
    "mumbai",
    "delhi",
    "hyderabad",
    "kolkata",
    "gurgaon",
    "bangalore",
    "pune",
    "noida",
    "faridabad",
    "bhopal",
    "surat",
    "lucknow",
    "kanpur",
    "patna",
];

export default function MultiSelectInput() {
    const [options, setOptions] = useState(cities);
    const [value, setValue] = useState('');
    const [selectedList, setSelectedList] = useState([]);
    const [focused, setFocused] = useState(false);

    const onInputChange = event => {
        const { value } = event.target;
        setValue(value);
    }

    const onSelect = (option) => {
        const updatedOptions = options.filter(val => option !== val);
        setSelectedList(prevState => ([
            ...prevState,
            option
        ]))
        setOptions(updatedOptions);
        setValue('');
    }

    const onDelete = (event) => {
        const { id } = event.target;
        const updatedElemets = selectedList.filter(listItem => listItem !== id);
        setSelectedList(updatedElemets);
    }

    const filteredOptions = options.filter(option => option.includes(value));

    return <div className='multiselect-container'>
        <div className='input-container'>
            <div className='pillContainer'>
                {
                    selectedList?.map(listItem => {
                        return <div className='pill' key={listItem}>
                            {listItem}
                            <div className='closeBtn' id={listItem} onClick={onDelete} />
                        </div>
                    })
                }
                <input 
                    type='text'
                    value={value} 
                    onChange={onInputChange} 
                    className='pillInput' 
                    onFocus={() => setFocused((prev) => !prev)}
                    onBlur={() => setFocused((prev) => !prev)}
                />
            </div>

            <div 
                className='options-container'
            >
                {
                    filteredOptions.map(option => {
                        return <div className='options' onClick={() => onSelect(option)} key={option}>{option}</div>
                    })
                }
            </div>
        </div>

    </div>
}