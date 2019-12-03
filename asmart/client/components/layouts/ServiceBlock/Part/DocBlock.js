import React, {useState} from "react";
import cx from "classnames";

const DocBlock = ({openClass, items}) => {

    const [toggleClass, setToggleClass] = useState(openClass);

    const toggleElement = () => {
        setToggleClass(!toggleClass);
    };

    return (
        <div className="bottom-doc-block">

            <div className={cx('block-title d-flex justify-content-center', {active: toggleClass})}
                 onClick={toggleElement}>
                <span>Посмотреть необходимые документы</span>
                <div className="icon">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

            </div>
            <div className={cx('content-doc', {active: toggleClass})}>
                <ul>
                    { items && items.map(item => (
                        <li key={item.file.ID}>
                            <a href={item.file.url} className="d-flex w-100 align-items-center">
                                <img src={item.file.icon} alt="иконка"/>
                                {item.file.filename}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default DocBlock;