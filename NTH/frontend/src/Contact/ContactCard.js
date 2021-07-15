const ContactCard = (props) => {
  return (
    <div className="contactus-card">
      <img src={props.image} width="210px" />
      <div className='card-name'>
        <h4>{props.name}</h4>
        <h5>
          
          {/* <br /> */}
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
          <a href="tel:+918329049174">
            <i class="fas fa-phone-alt"></i> {props.phone}
          </a>
          
        </h5>
      </div>
    </div>
  );
};

export default ContactCard;
