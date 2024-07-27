import ContactDetailsComponent from "./Contact/ContactDetailsComponent";
import MapComponent from "./Contact/MapComponent";
import JoinUsComponent from "./Contact/JoinUsComponent";
import CoverImageComponent from "./CoverImageComponent";

const ContactComponent = () => {
    return (
        <div>
            <CoverImageComponent image="ContactCoverImage.jpg" title="Contact Us"/>
            <ContactDetailsComponent />
            <MapComponent/>
            <JoinUsComponent/>
        </div>
    );
}

export default ContactComponent;