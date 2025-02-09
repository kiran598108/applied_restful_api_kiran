import { useState } from "react";
import axios from "axios";

function RandomButton() {

    const [displayText, setDisplayText] = useState("Random Bible verse");
    const callAPIRandom = async (event) => {
        event.preventDefault();
        try {
        const response = await axios.get("http://labs.bible.org/api/?passage=random&formatting=plain");
        console.log("API Response:", response.data);
        setDisplayText(response.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    return (
        <>
        <h2>{displayText}</h2>
        <p>Press the "Random" button to generate a random verse.</p>
        <form onSubmit={(event) => callAPIRandom(event)}>
            <input type="submit" name="rand" value="Random" />
        </form>
        </>
    );
};

export default RandomButton;