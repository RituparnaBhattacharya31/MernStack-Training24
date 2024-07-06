import Greeting from "./Greetings.css"
import MyComponent from "./MyComponent";
import styles from "./styles.module.css";

const Greetings = ({message, firstName, lastName, address}) => {
    // const {firstName, lastName} = props;
    // console.log("props : ", props);
    const stylesProp = { color: "red", fontSize: "20px" };
    return (
        <div>
            {/* <h1 className={`heading ${styles.myClass}`} style={stylesProp}>{message}, {firstName} {lastName}!</h1>
            <h2>City: {address.city}</h2> */}
            <MyComponent fullName={firstName + " " + lastName} />
        </div>
    );
}

export default Greetings;
