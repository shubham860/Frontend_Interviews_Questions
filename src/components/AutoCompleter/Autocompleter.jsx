import { useEffect, useRef, useState } from "react"

function defaultInputField(value, onChange, inputRef, placeholder) {
    return <input type='text' value={value} onChange={onChange} placeholder={placeholder} ref={inputRef} className="input" />
}

function defaultFilterMethod(options, value) {
    return options.length ? options.filter(option => option.includes(value)) : [];
}

function renderDefaultList(option, index) {
    return <div className="option" key={index}>{option}</div>
}

export default function AutoCompleterSearch(props) {
    const {
        options = [], // options is listing
        renderInput = defaultInputField, // renderInput is input field is render otherwise defaultInputField
        onFilter = defaultFilterMethod, // onFilter is filter method otherwise defaultFilterMethod
        renderList = renderDefaultList, // renderList is list item render otherwise renderDefaultList
        onSelect, // onSelect is select item
        noOptions = 'no result', // noOptions is no result message
        placeholder = 'search..'    // placeholder is input field placeholder
    } = props

    const [filterOptions, setFilterOptions] = useState([]);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    function onChange(event) {
        const value = event.target.value;
        setFilterOptions(onFilter(options, value));
        setValue(value);
    }

    function onItemSelect(event) {
        if (event.target.className === 'option') {
            const selectedText = event.target.textContent;
            setValue('');
            onSelect(selectedText);
            setFilterOptions(options);
        }
    }


    useEffect(() => {
        inputRef?.current?.focus()
        setFilterOptions(options);
    }, [])

    return <div className="autoCompleter">
        {renderInput(value, onChange, inputRef, placeholder)}
        <div className="option-container" onClick={onItemSelect}>
            {filterOptions && filterOptions.length ? filterOptions.map((option, index) => renderList(option, index)) : <div>{noOptions}</div>}
        </div>
    </div>
}
