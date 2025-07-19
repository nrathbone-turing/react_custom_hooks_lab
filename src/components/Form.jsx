import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {
    
    // Ensure the key of each is `name` and `serviceNumber` respectively.
    const [name, setName] = useLocalStorage("name", "");
    const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

    return (
      <>
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name:</label>
            {/* Connect to the `name` fields of the form */}
            <input type="text" data-testid={"name"} value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="service">Service Number:</label>
            {/* Connect to the `serviceNumber` fields of the form */}
            <input type="text" data-testid={"service"} value={serviceNumber} onChange={(e) => setServiceNumber(e.target.value)}/>

        </form>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
      </>
    );
}

export default Form