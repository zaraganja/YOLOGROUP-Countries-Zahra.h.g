import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../../App';


// global.fetch = jest.fn().mockImplementationOnce(() =>
//     Promise.resolve({
//         status: 400,
//         json: () => Promise.resolve({ data: { countries: [] } }),
//     })
// )
global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ data: { countries: [{ name: 'Andorra', code: 'AD', emoji: '🇦🇩' }] } }),
});


// global.fetch = jest.fn().mockImplementationOnce(() => {
//     Promise.resolve({
//         json: () => Promise.resolve({ data: { countries: [{ name: 'Andorra', code: 'AD', emoji: '🇦🇩' }] } }),
//     })

// });


describe("App component", () => {
    test("renders App component", async () => {

        render(<App />);

        const appElement1 = screen.getByTestId('first title');
        const appElement2 = screen.getByTestId('second title');
        const appElement3 = screen.getByTestId('third title');
        expect(appElement1).toBeInTheDocument();
        expect(appElement2).toBeInTheDocument();
        expect(appElement3).toBeInTheDocument();

        // Check if the component fetches data and renders the table
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(1);// for getcountries data
            const tableElement = screen.getByRole('table');
            expect(tableElement).toBeInTheDocument();
        });
    });


    test('handles input change and fetches data accordingly', async () => {
        render(<App />);

        // Simulate user input
        // fireEvent.change(screen.getByRole('textbox'), { target: { value: 'D' } });
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'AD' } });
        // console.log((screen.getByRole('textbox') as HTMLInputElement).value);
        // Check if the component fetches data based on input
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(3); //   FilterByCode and regexsearch
            const tableElement = screen.getByRole('table');
            expect(tableElement).toBeInTheDocument();
        });

    });




})
