import { act, useState } from "react";
import "./Accordion.css";
import Panel from "./Panel";
const Accordion = ({userDetails}) => {
    console.log(userDetails);
    const [activeIndex, setActiveIndex] = useState(1);
    const togglePanel = (index) => {
        activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index);
    }
    return (
    <div className="accordion">
        <h1>User Details</h1>
        {userDetails && 
            userDetails?.map((user) => {
                return <Panel key={user.id} title={user.title} isAccordionActive={activeIndex === user.id} onShow={() => togglePanel(user.id)}>{user.body}</Panel>
            })
        }
    </div>
    );
}
export default Accordion;