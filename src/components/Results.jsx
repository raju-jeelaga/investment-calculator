import { calculateInvestmentResults } from '../util/investment.js';
import { formatter } from '../util/investment.js';

export default function Results({input}){
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
    return(
        <>
        <p>The Results...</p>
        </>
    );
}