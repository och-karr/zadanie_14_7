var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.string.isRequired //walidacja właściwości do której
        //możemy później odwołać się, dzięki this.props.contact
    }, //był object ale konsola mówiła że string

    render: function() {
        return (
            <form className={'contactForm'}>
                <input type='text' placeholder= 'Imię' value= {this.props.contact.firstName} />
                <input type='text' placeholder= 'Nazwisko' value= {this.props.contact.lastName} />
                <input type='email' placeholder= 'Email' value= {this.props.contact.email} />
            </form>
        );
    }
});