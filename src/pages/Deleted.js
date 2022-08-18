import React from "react";
import EmailInbox from "../components/EmailInbox";
import "./Pages.css";


const Deleted = (props) => {
  return (
    <div>
      <h2>Deleted Email</h2>
      <EmailInbox
        items={props.items}
        type={"deleted-email"}
        onDeleteEmail={props.onDeletedEmail}
        onReadEmail={props.onReadEmail}
      />
    </div>
  );
};

export default Deleted;
