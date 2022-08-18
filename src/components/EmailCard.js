import React from "react";
import "./EmailCard.css";

//EmailCard Component
//This is the container for the email it doesn't have any function but to display the information of the message
const EmailCard = (props) => {
  const date =
    props.date.toLocaleString("en-US", { month: "long" }) +
    " " +
    props.date.toLocaleString("en-US", { day: "2-digit" }) +
    ", " +
    props.date.getFullYear();

  return (
    <div className="email-message__container">
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="email-message__item">
        <div className="email-message__subitem">From:</div>
        <div>
          {props.emailSenderName} <span>({props.emailAccount})</span>
        </div>
      </div>
      <div className="email-message__item">
        <div className="email-message__subitem">To:</div>
        <div>youremail@mail.com</div>
      </div>
      <div className="email-message__date">
        <div>{date}</div>
      </div>
      <div className="email-message__body">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default EmailCard;
