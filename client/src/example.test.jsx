import { describe, expect, test } from 'vitest';
import { queryByText, render, screen, fireEvent } from '@testing-library/react';
import WeatherForm from './components/form';


describe("Weather Form", () => {
    test("render the header correctly", () => {
        const { getByText } = render(<WeatherForm />)

        const header = getByText('Techtonica Weather Forecast App');

        expect(header).toBeInTheDocument();
    })
});

describe("Weather Form city", () => {
    test("render the city input correctly", () => {
        const { getByRole } = render(<WeatherForm />)
        const cityInput = getByRole('textbox');
        fireEvent.change(cityInput, { target: { value: "New York, NY" } });
        expect(cityInput).toBe;
    })
});

describe("Weather Form submit button", () => {
    test("render the submit button correctly", () => {
        const { getByRole } = render(<WeatherForm />)
        const submitButton = getByRole('button');

        fireEvent.click(submitButton);
        expect(submitButton).toBe;
    })
});

describe("Weather Form submit button", () => {
    test("shows error when city is incorrect", () => {
        const { getByRole, getByText, debug } = render(<WeatherForm />)
        const submitButton = getByRole('button');
        const cityInput = getByRole('textbox');
    

        fireEvent.change(cityInput, {target: {value: "Seattle"}});
        fireEvent.click(submitButton);

        expect(getByText('Please enter a city with the format City, State')).toBeInTheDocument();
    })
});

test('checks that the error is not in the document', () => {
    const { queryByText, getByRole } = render(<WeatherForm />);
    const cityInput = getByRole('textbox');
    const submitButton = getByRole('button');
    
    fireEvent.change(cityInput, {target: {value: "Seattle, WA"}});
    fireEvent.click(submitButton);
  
    const element = queryByText((content, element) => {
      // Custom text matcher logic
      const expectedText = 'Please enter a city with the format City, State';
      const elementText = element.textContent || '';
      return elementText.includes(expectedText);
    });
  
    expect(element).toBeNull();
  });




