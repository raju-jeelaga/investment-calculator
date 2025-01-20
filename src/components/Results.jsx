import { calculateInvestmentResults } from '../util/investment.js';
import { formatter } from '../util/investment.js';

export default function Results({input}){
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(yearData.totalInterest)}</td>
                        <td>{formatter.format(yearData.investedCapital)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}