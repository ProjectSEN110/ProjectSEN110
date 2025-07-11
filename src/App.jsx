import { useState } from "react";

function Budget() {
    // State
    const [availMoney, setAvailMoney] = useState(0);

    const [firstSavingName, setFirstSavingName] = useState("");
    const [secondSavingName, setSecondSavingName] = useState("");
    const [thirdSavingName, setThirdSavingName] = useState("");
    const [fourthSavingName, setFourthSavingName] = useState("");
    const [fifthSavingName, setFifthSavingName] = useState("");

    const [firstSavingMoney, setFirstSavingMoney] = useState(0);
    const [secondSavingMoney, setSecondSavingMoney] = useState(0);
    const [thirdSavingMoney, setThirdSavingMoney] = useState(0);
    const [fourthSavingMoney, setFourthSavingMoney] = useState(0);
    const [fifthSavingMoney, setFifthSavingMoney] = useState(0);

    const save = () => {
        const total =
            Number(firstSavingMoney) +
            Number(secondSavingMoney) +
            Number(thirdSavingMoney) +
            Number(fourthSavingMoney) +
            Number(fifthSavingMoney);

        if (total > Number(availMoney)) {
            alert("You don't have enough money");
        } else {
            alert("Saved");
        }
    };

    return (
        <>
            <div>
                <div>
                    <label>Available Money</label>
                    <input
                        type="number"
                        placeholder="Available Money"
                        onChange={(e) => setAvailMoney(Number(e.target.value))}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="First Saving Name"
                        onChange={(e) => setFirstSavingName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="First Saving Money"
                        onChange={(e) => setFirstSavingMoney(Number(e.target.value))}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Second Saving Name"
                        onChange={(e) => setSecondSavingName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Second Saving Money"
                        onChange={(e) => setSecondSavingMoney(Number(e.target.value))}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Third Saving Name"
                        onChange={(e) => setThirdSavingName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Third Saving Money"
                        onChange={(e) => setThirdSavingMoney(Number(e.target.value))}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Fourth Saving Name"
                        onChange={(e) => setFourthSavingName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Fourth Saving Money"
                        onChange={(e) => setFourthSavingMoney(Number(e.target.value))}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Fifth Saving Name"
                        onChange={(e) => setFifthSavingName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Fifth Saving Money"
                        onChange={(e) => setFifthSavingMoney(Number(e.target.value))}
                    />
                </div>

                <button onClick={save}>Save</button>
            </div>

            <p>Available Money: {availMoney}</p>
            {firstSavingName && <p>{firstSavingName}: {firstSavingMoney}</p>}
            {secondSavingName && <p>{secondSavingName}: {secondSavingMoney}</p>}
            {thirdSavingName && <p>{thirdSavingName}: {thirdSavingMoney}</p>}
            {fourthSavingName && <p>{fourthSavingName}: {fourthSavingMoney}</p>}
            {fifthSavingName && <p>{fifthSavingName}: {fifthSavingMoney}</p>}
        </>
    );
}

export default Budget;