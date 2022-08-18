import React, {useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Nav Component
import Navigation from "./UI/Navigation";
//Pages Components
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import Deleted from "./pages/Deleted";

//Dummy Data
import { EmailData } from "./components/EmailData";

import "./App.css";
import Modal from "./UI/Modal";

const App = () => {


  //useState const for email and modal
  const [emailsMessages, setEmailMessages] = useState(EmailData);
  const [showModal, setShowModal] = useState(true);
  const [countTotalEmail, setCountTotalEmail] = useState('');
  const [countNewEmail, setCountNewEmail] = useState('');

  //useEffect here to initialize the values for the modal & sort the list of emails by date
  useEffect(() => {
    setCountNewEmail(getUnreadEmails());
    setCountTotalEmail(emailsMessages.length);
    sortEmailsByDate();
  }, []);

  //Sort Emails by date
  const sortEmailsByDate = () => {
    let sortedEmails = emailsMessages.sort(
      (email1, email2) => email2.date - email1.date);
    setEmailMessages(sortedEmails);
  };

  //Count how many email are not in statusRead, the value is use in the Modal
  const getUnreadEmails = () => {
    let newMessages = emailsMessages.filter((email) => {
      return email.statusRead === false;
    });

    return newMessages.length;
  };

  //Function to set the Deleted status to the email, it updates the property type to deleted-email, it recieves the emailId to filter
  const setDeleteStatusHandler = (emailId) => {
    let updatedMessages = emailsMessages.map((item) => {
      if (item.id === emailId) {
        return { ...item, type: "deleted-email" };
      }
      return item;
    });
    setEmailMessages(updatedMessages);
  };

  //Function to update the status after one email has been read, it recieves the emailId to filter
  const setReadEmailHandler = (emailId) => {
    let updatedMessages = emailsMessages.map((item) => {
      if (item.id === emailId) {
        return { ...item, statusRead: true };
      }
      return item;
    });
    setEmailMessages(updatedMessages);
  };

  //Function to delete items from the deleted folder
  const setDeleteEmailHandler = (emailId) => {
      setEmailMessages((email) => {
        let updateMessages = email.filter((email) => email.id !== emailId);
        return updateMessages;
      });
  };

  //Define the routes for the multiple pages to render.
  return (
    <>
      {/* set initial Modal */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        totalEmail={countTotalEmail}
        totalNewEmail={countNewEmail}
      />
      <Router>
        <Navigation>
          <Routes>
            <Route
              path="/"
              element={
                <Inbox
                  onDeletedEmail={setDeleteStatusHandler}
                  onReadEmail={setReadEmailHandler}
                  items={emailsMessages}
                  type={"new-email"}
                />
              }
            />
            <Route
              path="/sent"
              element={
                <Sent
                  onDeletedEmail={setDeleteStatusHandler}
                  onReadEmail={setReadEmailHandler}
                  items={emailsMessages}
                  type={"sent-email"}
                />
              }
            />
            <Route
              path="/deleted"
              element={
                <Deleted
                  onReadEmail={setReadEmailHandler}
                  onDeletedEmail={setDeleteEmailHandler}
                  items={emailsMessages}
                  type={"deleted-email"}
                />
              }
            />

            {/* <Route path="/sent" element={<Sent />} />
          <Route path="/deleted" element={<Deleted />} /> */}
          </Routes>
        </Navigation>
      </Router>
    </>
  );
};

export default App;
