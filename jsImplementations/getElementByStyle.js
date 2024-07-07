function getElementByStyle(property, value) {
    const elements = document.querySelectorAll("*");
    return Array.from(elements)
        .map((element) => {
            const elementStyle = getComputedStyle(element);
            const propertyValue = elementStyle.getPropertyValue(property);
            if (propertyValue === value) {
                return element.tagName;
            }
        })
        .filter(Boolean);
}

{/* <div id="app">
    <div>
        <div>
            <p class="red">hello</p>
        </div>
        <span class="red"></span>
    </div>

    <button onclick="callMe()">button</button>
</div>

.red {
    font-size: 20px;
} */}

console.log(getElementByStyle("font-size", "20px"));