import './stepper.css';
import { useMemo } from 'react';

export default function Stepper({formConfig, currentStep, setStep}) {

    const lineWidth = useMemo(() => {
        const totalPieces = formConfig.length - 1;
        if (currentStep === 1) return 0;
        const width = Math.ceil(100 / totalPieces) * (currentStep - 1);
        return width > 100 ? 100 : width
      }, [currentStep]);

    return <div className="stepper">
        {
            formConfig.map((step) => {
                const { stepId, label } = step;
                const stepClass = currentStep === stepId ? 'activeStep' : ''
                return <div className='step-container' onClick={() => setStep(stepId)} key={stepId}>
                    <div className={`step ${stepClass}`}>{stepId}</div>
                    <div className='step-label'>{label}</div>
                </div>
            })
        }
        <div className='step-line' style={{width: `${lineWidth}%`}} />
    </div>
}