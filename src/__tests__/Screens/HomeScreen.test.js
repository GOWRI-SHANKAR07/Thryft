import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../../App'

describe('HomeScreen Component', () => {
  it('should render without errors', () => {
    const { getByText } = renderer.create(<App />).toJSON();
    
    // You can use assertions like getByText to check if specific text is present
    // Add more assertions as needed
  });

  // Add more test cases for different scenarios
});
