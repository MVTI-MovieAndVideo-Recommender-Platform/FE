import React from 'react';
//import { Link } from 'react-router-dom';
  
function MVTITestPage() {

  
  return (
     <section className='flex flex-col items-center p-10 mb-10 bg-white dark:bg-gray-800 text-black dark:text-white'>
      <div className='testpage_bg'>
      {/*MVTIContainer 구성 : 검사하기 or 재검사+기존결과보기 버튼*/}
      <div>
      </div>
    </div>
      <article className=''>
        <h1>article</h1>
        <section className='cards-container'>
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />
            <div className="swap-on ">😈</div>
            <div className="swap-off">😇</div>

        </label>
        <input type="checkbox" className="toggle toggle-success" checked />
          <input type="checkbox" className="toggle toggle-warning" checked />
          <input type="checkbox" className="toggle toggle-info" checked />
          <input type="checkbox" className="toggle toggle-error" checked />
        </section>
        <div role="tablist" className="tabs tabs-lifted">
  <a role="tab" className="tab">Tab 1</a>
  <a role="tab" className="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">Tab 2</a>
  <a role="tab" className="tab">Tab 3</a>
</div>
        <div className="flex flex-col w-full">
          <div className="divider">Default</div>
          <div className="divider divider-neutral">Neutral</div>
          <div className="divider divider-primary">Primary</div>
          <div className="divider divider-secondary">Secondary</div>
          <div className="divider divider-accent">Accent</div>
          <div className="divider divider-success">Success</div>
          <div className="divider divider-warning">Warning</div>
          <div className="divider divider-info">Info</div>
          <div className="divider divider-error">Error</div>
</div>
      </article>
    </section>
);
};

export default MVTITestPage;