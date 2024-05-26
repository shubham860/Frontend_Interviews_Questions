import { AccordianContainer, Accordian as AccordianBody } from "./Accordian"

export default function Accordian() {
    return  <AccordianContainer isExpandAll={false}>
        <AccordianBody label='First' isExpanded={true} isDisabled={true}>
            Data of 1st AccordianBody
        </AccordianBody>
        <AccordianBody label='Second'>
            Data of 2st AccordianBody
        </AccordianBody>
        <AccordianBody label='Third'>
            Data of 3rd AccordianBody
        </AccordianBody>
    </AccordianContainer>
}