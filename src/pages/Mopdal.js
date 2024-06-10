//import "./style.css";

export const Modal = ({
    isOpen,
    toggleOpen,
    children,
}) =>
    (
        <div className=
        {
            'overlay &{ isOpen ? "open": ""}'            
        }
        onClick={toggleOpen}>
            <div className="modal01">
                {children}
            </div>
        </div>
        );
    