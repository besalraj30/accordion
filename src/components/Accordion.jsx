import { act, useState } from "react";
import "./Accordion.css";
import Panel from "./Panel";
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const togglePanel = (index) => {
        activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index);
    }
    return (
    <div className="accordion">
        <h1>Accordion Title</h1>
        <Panel title = "Title 1" isAccordionActive={activeIndex === 0} onShow = {() => togglePanel(0)}>Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1Body 1</Panel>
        <Panel title = "Title 2" isAccordionActive={activeIndex === 1} onShow = {() => togglePanel(1)}>Body2</Panel>
    </div>
    );
}
export default Accordion;