import React from "react";
import EmailListItem from "./EmailListItem";
import "./EmailList.css";


// Component that maps the expected list of items, this uses internally an EmailListItem component & creates one item per item in the list recieved
const EmailList = (props) => {
  if (props.items.length === 0) {
    return <h2>This inbox is empty.</h2>;
  }

  return (
    <div className="email-list__container">
      <ul className="emails-list">
        {props.items.map((email) => (
          <EmailListItem
            key={email.id}
            id={email.id}
            title={email.title}
            emailSenderName={email.emailSenderName}
            date={email.date}
            type={email.type}
            status={email.statusRead}
            onSelect={props.onSelectedEmail}
            onDelete={props.onDeleteEmail}
          />
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
