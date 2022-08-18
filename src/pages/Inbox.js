import React from "react";
import EmailInbox from "../components/EmailInbox";
import "./Pages.css";


const Inbox = (props) => {
  return (
    <div>
      <h2>Inbox Email</h2>
      <EmailInbox
        items={props.items}
        type={"new-email"}
        onDeleteEmail={props.onDeletedEmail}
        onReadEmail={props.onReadEmail}
      />
    </div>
  );
};

export default Inbox;
