import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

function ContactList () {
  const defaultContact = new Contact("Carlos", "Cruz", "carturo99@gmail-.com", true);
  return (
    <div>
      <ContactComponent contact={defaultContact} />
    </div>
  );
};

export default ContactList;
