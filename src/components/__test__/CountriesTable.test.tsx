import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CountriesTable from '../CountriesTable';


describe("CountriesTable", () => {
    test("renders CountriesTable with datas and table ", () => {
        // Mock data for testing
        const mockCountries = [
            { name: 'Country1', code: 'C1', emoji: '🌍' },
            { name: 'Country2', code: 'C2', emoji: '🌎' },
        ];
        render(<CountriesTable column1={"country name"} column2={"country code"} Countries={mockCountries} isMobile={false} />);
        // Check if the table is rendered
        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeInTheDocument();

        // Check if the table headers are rendered with correct text
        const headerCells = screen.getAllByRole('columnheader');
        expect(headerCells[0]).toHaveTextContent('country name');
        expect(headerCells[1]).toHaveTextContent('country code');

        // Check if the table rows are rendered with correct data
        mockCountries.forEach((country) => {
            const rowElement = screen.getByText(country.emoji);
            const rowElement1 = screen.getByText(country.name);
            const rowElement2 = screen.getByText(country.code);
            
            expect(rowElement1).toBeInTheDocument();
            expect(rowElement2).toBeInTheDocument();
            expect(rowElement).toBeInTheDocument();
        });
    })
})