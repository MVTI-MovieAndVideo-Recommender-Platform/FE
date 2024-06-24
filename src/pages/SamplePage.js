import React, { useState } from 'react';
import StepIndicator from '../component/StepIndicator.js';
import "./css/MVTITestPage.css"

//
const SamplePage = () => {
    const [text, setText] = useState("");
    const [mbti, setMBTI] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onClick = () => {
        setMBTI(text);
        console.log(mbti);
    };

    return (
        <div className="TestPage">
            <h2>Welcome to the MVTI Test</h2>
            <section className='flex flex-col items-center p-10  mb-10 bg-white dark:bg-gray-800 text-black dark:text-white'>
                <div className='p-20 mb-30'>
                    <input type='text' name='mbti' onChange={onChange}></input>
                    <button onClick={onClick}>입력</button>
                    <p>input 입력값 : {mbti}</p>
                </div>
                <StepIndicator steps={3} initialStep={0} />
            </section>
        </div>
    );
}

export default SamplePage;