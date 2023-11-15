import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SearchBox from "../SearchBox";

describe('SearchBox', () => {
    test('renders SearchBox with input and icon', async () => {
        const setsearchValueFuncMock = jest.fn();
        const getCountriesDataMock = jest.fn();
        const RegexSearchMock = jest.fn();
        const FilterByCodeMock = jest.fn();
        render(
            <SearchBox
                isMobile={false}
                searchValue="AD"
                setsearchValueFunc={setsearchValueFuncMock}
                getCountriesData={getCountriesDataMock}
                RegexSearch={RegexSearchMock}
                FilterByCode={FilterByCodeMock}
            />
        );
        // Get the input element
        const inputElement = screen.getByPlaceholderText('Enter Countriy Code') as HTMLInputElement;
        expect(inputElement).toBeInTheDocument();
        // Ensure that the input value is set correctly
        // expect(inputElement.value).toBe('AD');
        // Simulate user typing into the input
        // fireEvent.change(inputElement, { target: { value: 'AD' } });
        // Get the icon element
        const iconElement = screen.getByTestId("start searching");
        expect(iconElement).toBeInTheDocument();
        fireEvent.click(iconElement);
        fireEvent.click(inputElement);
    });

    test(' tests handleInputChange function ', async () => {

        const setsearchValueFuncMock = jest.fn();
        const getCountriesDataMock = jest.fn();
        const RegexSearchMock = jest.fn();
        const FilterByCodeMock = jest.fn();

        render(<SearchBox
            isMobile={false}
            searchValue={"AD"}
            setsearchValueFunc={setsearchValueFuncMock}
            getCountriesData={getCountriesDataMock}
            RegexSearch={RegexSearchMock}
            FilterByCode={FilterByCodeMock}
        />);
        const SearchBoxElement = screen.getByPlaceholderText('Enter Countriy Code') as HTMLInputElement;

        fireEvent.change(SearchBoxElement, { target: { value: "" } });
        await waitFor(() => {
            expect(getCountriesDataMock).toHaveBeenCalledTimes(2);
        });


        fireEvent.change(SearchBoxElement, { target: { value: "D" } });
        await waitFor(() => {
            expect(RegexSearchMock).toHaveBeenCalledTimes(1);
        });

        fireEvent.change(SearchBoxElement, { target: { value: "EE" } });
        await waitFor(() => {
            console.log("SearchBoxElement value:", SearchBoxElement.value);
            console.log("Calling FilterByCodeMock");
            expect(FilterByCodeMock).toHaveBeenCalledTimes(1);

        });

    })

});