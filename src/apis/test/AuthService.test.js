import { Login } from "../AuthService";
import requests from '../HttpServices';

jest.mock('../HttpServices');

describe('Login Function', () => {
    it('should call requests.post with correct arguments', async () => {
      const mockData = { username: 'testuser', password: 'testpassword' };
      const mockResponse = { token: 'mockToken' };
  
      // Mock the post method of requests
      requests.post.mockResolvedValueOnce({ data: mockResponse });
  
      // Call the Login function with mock data
      await Login(mockData);
  
      // Assert that requests.post was called with the correct arguments
      expect(requests.post).toHaveBeenCalledWith('auth/login', mockData);
    });
  
    it('should return the response from requests.post', async () => {
      const mockData = { username: 'unandhakumar2000@gmail.com"', password: 'Nandha1' };
      const mockResponse = { token: 'mockToken' };
  
      // Mock the post method of requests
      requests.post.mockResolvedValueOnce({ data: mockResponse });
  
      // Call the Login function with mock data
      const response = await Login(mockData);
      console.log(response.data);
  
      // Assert that the response from Login function matches the mock response
      expect(response).toEqual(mockResponse);
    });
  
    it('should throw an error if requests.post fails', async () => {
      const mockData = { username: 'testuser', password: 'testpassword' };
      const mockError = new Error('Request failed');
  
      // Mock the post method of requests to reject with an error
      requests.post.mockRejectedValueOnce(mockError);
  
      // Call the Login function with mock data and expect it to throw an error
      await expect(Login(mockData)).rejects.toThrowError('Request failed');
    });
  });