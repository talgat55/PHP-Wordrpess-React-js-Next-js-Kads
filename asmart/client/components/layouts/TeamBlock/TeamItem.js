import React from "react";
const TeamItem = ({key, title, photo, position, icon_position}) => {
    return (
        <div key={key} className="item-team">
            <div className="img-block">
                <img src={photo} alt={title}/>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <div className="position d-flex  align-items-top">
                    <img src={icon_position} alt="Иконка"/>
                    <div className="text">
                        {position}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TeamItem;