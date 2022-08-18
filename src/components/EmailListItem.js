import React from "react";

import "./EmailListItem.css";
import * as IoIcons from "react-icons/io5";

const EmailListItem = (props) => {
  const date =
    props.date.toLocaleString("en-US", { month: "long" }) +
    " " +
    props.date.toLocaleString("en-US", { day: "2-digit" }) +
    ", " +
    props.date.getFullYear();

  const onSelectHandler = () => {
    props.onSelect(props.id);
  };

  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };
  

  return (
    <li>
      <div
        className="email-list-item"
        style={{ borderLeft: !props.status ? "5px solid #031974" : "5px" }}
      >
        <div className="email-list-handler" onClick={onSelectHandler}>
          <div className="email-list-item__title">
            {props.title}{" "}
            <span
              style={{
                display: props.status ? "none" : "",
              }}
              className="email-list-item__tag"
            >
              New
            </span>
          </div>
          <div className="email-list-item__senderInfo">
            {props.emailSenderName}
            <span className="email-list-item-__date">{date}</span>
          </div>
        </div>
        <div onClick={onDeleteHandler} className="email-list-item__icon">
          <IoIcons.IoTrashOutline />
        </div>
      </div>
    </li>
  );
};

export default EmailListItem;
