import React, { useEffect, useState } from 'react';
import './index.css';

let order = 0;
let isAllClicked = false;

export default function FillBoxes() {
    const [boxes, setBoxes] = useState(renderBoxes('initial'));

    useEffect(() => {
        if (boxes.some(box => !box.isClicked)) {
            isAllClicked = false
        } else {
            isAllClicked = true;
        }

        if (isAllClicked) {
            boxes.forEach((box, index) => {
                setTimeout(() => {
                    let tempBox = [...boxes];
                    tempBox[index].isClicked = false;
                    setBoxes(tempBox)
                }, (index + 1) * 1000)
            });
        }
    }, [boxes])

    function onBoxClick(event) {
        const id = event.target.id.split('-');
        const row = Number(id[0]);
        const col = Number(id[1]);
        const updatedBoxes = [...boxes];
        const currentBox = updatedBoxes.find(box => box.col === col && box.row === row && !box.isClicked);
        currentBox.isClicked = true;
        currentBox.order = ++order;
        updatedBoxes.sort((a, b) => a.order - b.order)
        setBoxes(updatedBoxes)
    }

    function renderBoxes(type) {
        const newBoxes = [];
        const createdBoxes = [1, 2, 3].map(row => {
            return [1, 2, 3].map(col => {
                if (!(row === 2 && col > 1)) {
                    if (type === 'initial') {
                        return newBoxes.push({
                            row,
                            col,
                            isClicked: false,
                            order: null
                        })
                    }
                    const isBoxClicked = boxes.find(box => box.col === col && box.row === row && box.isClicked);
                    const boxClasses = isBoxClicked ? 'visibleBox activeClasses' : 'visibleBox'
                    return <div className={boxClasses} id={`${row}-${col}`} key={`visible-${row}-${col}`} onClick={onBoxClick}>
                        {row}, {col}
                    </div>
                } else {
                    return <div className='invisibleBox' key={`invisible-${row}-${col}`} />
                }
            })
        })

        if (type === 'initial') {
            return newBoxes;
        }

        return createdBoxes;
    }

    return <div className='app'>
        <div className='box-container'>
            {renderBoxes()}
        </div>
    </div>
}