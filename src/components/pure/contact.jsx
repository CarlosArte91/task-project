import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

function ContactComponent ({ contact }) {
  return (
    <div>
      <h3>{ contact.name }</h3>
      <h3>{ contact.lastname }</h3>
      <h3>{ contact.email }</h3>
      <h3>{ contact.connect ? "Contact in line" : "Contact demiss" }</h3>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
