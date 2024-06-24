import React, { useEffect, useState, useCallback } from 'react';

const StepIndicator = ({ steps, initialStep = 0 }) => {
    const [step, setStep] = useState(initialStep);

    const displayStep = useCallback((value) => {
        const stepsElements = document.querySelectorAll('.step');
        stepsElements.forEach((stepElement, index) => {
            if (index === value) {
                stepElement.classList.remove('hidden');
            } else {
                stepElement.classList.add('hidden');
            }
        });
    }, []);

    const checkExtremes = useCallback((currentStep) => {
        const prevButton = document.querySelector('[data-action="prev"]');
        const nextButton = document.querySelector('[data-action="next"]');

        if (currentStep <= 0) {
            prevButton.setAttribute('disabled', 'true');
        } else {
            prevButton.removeAttribute('disabled');
        }

        if (currentStep >= steps - 1) {
            nextButton.setAttribute('disabled', 'true');
        } else {
            nextButton.removeAttribute('disabled');
        }
    }, [steps]);

    useEffect(() => {
        displayStep(step);
        checkExtremes(step);
    }, [step, displayStep, checkExtremes]);

    const prev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const next = () => {
        if (step < steps - 1) {
            setStep(step + 1);
        }
    };

    return (
        <div>
            <button data-action="prev" onClick={prev}>이전</button>
            <button data-action="next" onClick={next}>다음</button>
        </div>
    );
};

export default StepIndicator;