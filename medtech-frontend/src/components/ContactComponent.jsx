import ContactCoverImageComponent from "./Contact/ContactCoverImageComponent";
import ContactDetailsComponent from "./Contact/ContactDetailsComponent";
import MapComponent from "./Contact/MapComponent";
import JoinUsComponent from "./Contact/JoinUsComponent";

const ContactComponent = () => {
    return (
        <div>
            <ContactCoverImageComponent image="ContactCoverImage.jpg"/>
            <ContactDetailsComponent />
            <MapComponent/>
            <JoinUsComponent/>
        </div>
    );
}

export default ContactComponent;