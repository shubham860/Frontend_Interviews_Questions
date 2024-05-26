import React, { useEffect } from 'react';
import AutoCompleterSearch from './Autocompleter';

import './index.css'

export default function Autocompleter() {

    return <div className='autoCompleter-container'>
        <AutoCompleterSearch
                options={['abhinav', 'shubham', 'ritvik', 'kamal', 'gyan', 'raj']}
                onSelect={(value) => alert('Calling', value)}
              
            />
    </div>
}