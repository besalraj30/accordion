import { useState } from "react";

const Panel = ({title, children, isAccordionActive, onShow}) => {
    // const [isShow, setIsShow] = useState(false);
    return (
        <div className="panel">
            <div className="panel-title">
                <h1>{title}</h1>
                <p aria-expanded={isAccordionActive} onClick={onShow}>{isAccordionActive ? '⬆️' : '⬇️'}</p>
            </div>
            
            {isAccordionActive && <p>{children}</p>}
        </div>
    )
}

export default Panel;