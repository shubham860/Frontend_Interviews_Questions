import React, { useEffect, useState, Children, cloneElement } from 'react';
import './index.css'

export const AccordianContainer = ({ children, isExpandAll }) => {
    return <div className='app-container'>
        <div className='accordian-container'>
            {
               Children.map(children, (child) => {
                    return cloneElement(child, { isExpandAll });
                })
            }
        </div>
    </div>
}

export function Accordian(props) {
    const { isExpanded = false, isDisabled = false, isExpandAll } = props;
    const [open, setOpen] = useState(false);
    const accordianHeaderClasees = open ? 'accordian-heading active' : 'accordian-heading';
    const arrowClass = !open ? 'arrowDown' : '';

    const onAccordianClicked = () => {
        if (isDisabled) return;
        setOpen(!open)
    }

    useEffect(() => {
        if (isExpanded || isExpandAll) {
            setOpen(true);
        }
    }, [])

    return <div className='accordian'>
        <div className={accordianHeaderClasees} onClick={onAccordianClicked}>
            <span className='label'>{props.label}</span><span className={arrowClass}>^</span>
        </div>
        {
            open ? <div className='accordian-content'>
                {props.children}
            </div> : ''
        }
    </div>
}