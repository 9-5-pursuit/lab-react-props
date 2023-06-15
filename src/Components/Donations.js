const Donations = (props) => {
    const { amount, caption, name } = props;
  
    return (
      <li>
        <span>
          {name} donated ${amount}
        </span>
        {caption}
      </li>
    );
  };
  
  export default Donations;