import { calculateInvestmentResults,formatter } from "../util/invesment.js";

export default function Results({ input }) {
  const result = calculateInvestmentResults(input);
  const initialInvestment=result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment Value</th>
          <th>Interest (Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {result.map((yearData=>{

            const totalInterst=yearData.valueEndOfYear-yearData.annualInvestment*yearData.year-initialInvestment;
            const totalAmountInvested=yearData.valueEndOfYear-totalInterst;
            return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterst)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                
                </tr>
            )
        }))}

      </tbody>
    </table>
  );
}
