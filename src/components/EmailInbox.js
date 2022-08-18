import React, { useState } from "react";
import EmailList from "./EmailList";
import EmailMessage from "./EmailMessage";

//EmailInbox component, this component contains both EmailList & the EmailMessage 


const EmailInbox = (props) => {
  const filteredEmails = props.items.filter((email) => {
    return email.type === props.type;
  });

  //Set email to display in the EmailMessage component
  const [selectedEmail, setSelectedEmail] = useState("");

  //Function that handle the selected email this will display the item on the EmailMessage component & sends the emailID to change the status to read
  const selectedEmailHandler = (emailId) => {
    setSelectedEmail(
      props.items.filter((email) => {
        return email.id === emailId;
      })
    );
    props.onReadEmail(emailId);

  };

  return (
    <div>
      <EmailList
        items={filteredEmails}
        onSelectedEmail={selectedEmailHandler}
        onDeleteEmail={props.onDeleteEmail}
      />
      <EmailMessage items={selectedEmail} />
    </div>
  );
};

export default EmailInbox;
