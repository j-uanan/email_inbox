import React from "react";
import EmailCard from "./EmailCard";

import "./EmailMessage.css";

//This component handle the email to be displayed in the EmailCard component.
function EmailMessage(props) {
  if (props.items.length === 0) {
    return (
      <div className="email-message__card">
        <h2>Select an element to read</h2>
      </div>
    );
  }
  return (
    <div className="email-message">
      {props.items.map((email) => (
        <EmailCard
          key={email.id}
          id={email.id}
          title={email.title}
          emailSenderName={email.emailSenderName}
          emailAccount={email.emailAccount}
          date={email.date}
          message={email.message}
        />
      ))}
    </div>
  );
}

export default EmailMessage;
