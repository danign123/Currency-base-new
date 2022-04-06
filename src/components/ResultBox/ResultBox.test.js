import { render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';
import { formatAmountInCurrency } from '../../utils/formatAmountInCurrency';

    describe('Component ResultBox', () => {
        it('should render without crashing', () => {
            render(<ResultBox from="PLN" to="USD" amount={111} />);
        });

        const testCasesAmount = [
            { amount: 100},
            { amount: 200},
            { amount: 345},
          ];
        
        for(const testObj of testCasesAmount) {
            it('should render proper info about conversion when PLN -> USD', () => {
                render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);
                const formattedAmount = formatAmountInCurrency(testObj.amount, 'PLN')
                const convertedAmount = formatAmountInCurrency((testObj.amount / 3.5), 'USD')
                const output = screen.getByTestId('output');
                expect(output).toHaveTextContent(`${formattedAmount} = ${convertedAmount}`);
            });
        }
    });
