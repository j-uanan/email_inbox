import React from "react";
import EmailInbox from "../components/EmailInbox";
import "./Pages.css"

const Sent = (props) => {
  return (
    <div>
      <h2>Sent Email</h2>
      <EmailInbox
        items={props.items}
        type={"sent-email"}
        onDeleteEmail={props.onDeletedEmail}
        onReadEmail={props.onReadEmail}
      />
    </div>
  );
};

export default Sent;
