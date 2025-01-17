import { useState } from "react";

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        intialInvestement: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required 
                    value={userInput.intialInvestement} 
                    onChange={() => handleChange('intialInvestement', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required 
                    value={userInput.annualInvestment}
                    onChange={() => handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required 
                    value={userInput.expectedReturn}
                    onChange={() => handleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required 
                    value={userInput.duration}
                    onChange={() => handleChange('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    );

}