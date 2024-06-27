import { formConfig } from "./formConfig";
import Stepper from "../Stepper";
import './index.css';
import { useState } from "react";

export default function MultiStepForm({ formState, setFormState }) {
    const [currentStep, setStep] = useState(1);
    const [currentForm, setCurrentForm] = useState(formConfig[0]);

    const onStepClick = (type) => {
        if (onValidate(currentStep - 1)) return;
        let step;
        if (type === 'finish') {
            const data = Object.entries(formState).map(([key, value]) => `${key}: ${value.value}`);
            step = formConfig.length;
            alert(data.join('\n'));
        } else if (type === 'next') {
            step = currentStep + 1;
        } else {
            if (currentStep <= 1) {
                step = 1;
            } else {
                step = currentStep - 1;
            }
        }
        setStep(step);
        setCurrentForm(formConfig[step - 1]);
    }

    const onInputChange = (event) => {
        const { name, value } = event.target;
        if (value !== '') {
            setFormState((prevState => ({
                ...prevState,
                [name]: { value, error: '' }
            })))
        }
    }

    const onValidate = (stepId) => {
        const currentForm = formConfig[stepId];
        let isError = false;
        for (let i = 0; i < currentForm.fields.length; i++) {
            const label = currentForm.fields[i].label;
            if (!formState[label]?.value) {
                isError = true;
                setFormState(prevState => ({
                    ...prevState,
                    [label]: { ...prevState[label], error: 'Please enter some value' }
                }))
            }
        }
        return isError;
    }

    return <div className="multiStepForm">
        <div className="form-container">
            <Stepper formConfig={formConfig} currentStep={currentStep} setStep={setStep} />
            <div className="form-fields">
                {
                    currentForm?.fields?.map((form, index) => {
                        const { label, type, placeholder } = form;
                        return <div className="fields" key={index}>
                            <div className="label">{label}</div>
                            <input type={type} onChange={onInputChange} value={formState?.[label]?.value || ''} name={label} placeholder={placeholder} className="input" />
                            <div className="error">{formState?.[label]?.error || ''}</div>
                        </div>
                    })
                }
            </div>
        </div>

        <div className="form-footer">
            {currentStep > 1 ? <button className="footerbtn" onClick={onStepClick}>Previous</button> : ''}
            <button className="footerbtn" onClick={() => onStepClick(currentStep === 4 ? 'finish' : 'next')}>{currentStep === 4 ? 'Finish' : 'Next'}</button>
        </div>
    </div>
}