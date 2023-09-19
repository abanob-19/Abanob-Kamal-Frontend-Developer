import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataGrid from './DataGrid';

describe('DataGrid', () => {
  // Define a sample array of rockets for testing
  const rockets = [
    {
      id: 1,
      name: 'Rocket 1',
      description: 'Description of Rocket 1',
      company: 'SpaceX',
      active: true,
    },
    {
      id: 2,
      name: 'Rocket 2',
      description: 'Description of Rocket 2',
      company: 'NASA',
      active: false,
    },
  ];

  it('renders a list of rockets', () => {
    render(<DataGrid rockets={rockets} />);

    // Check if the component renders the rocket names
    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
    expect(screen.getByText('Rocket 2')).toBeInTheDocument();
  });

  it('displays rocket details when the "Details" button is clicked', () => {
    render(<DataGrid rockets={rockets} />);

    // Find the "Details" button for Rocket 1 and click it
    const detailsButton = screen.getByText('Details', { selector: 'button' });
    fireEvent.click(detailsButton);

    // Check if the popup displays Rocket 1's details
    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
    expect(screen.getByText('Description of Rocket 1')).toBeInTheDocument();
    expect(screen.getByText('Company: SpaceX')).toBeInTheDocument();
    expect(screen.getByText('Active: true')).toBeInTheDocument();
  });

  it('closes the rocket details popup when the "Close" button is clicked', () => {
    render(<DataGrid rockets={rockets} />);

    // Find the "Details" button for Rocket 1 and click it
    const detailsButton = screen.getByText('Details', { selector: 'button' });
    fireEvent.click(detailsButton);

    // Find and click the "Close" button in the popup
    const closeButton = screen.getByText('×', { selector: 'button' });
    fireEvent.click(closeButton);

    // Check if the popup is closed by verifying that Rocket 1 is no longer displayed
    expect(screen.queryByText('Rocket 1')).toBeNull();
  });
});
