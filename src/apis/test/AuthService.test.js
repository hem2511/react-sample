import { describe, it, expect, vi } from 'vitest';
import HttpServices from '../HttpServices';
import { Login, Register } from '../AuthService'; // Replace with the actual path to your module

// Mock the post method of HttpServices
vi.spyOn(HttpServices, 'post').mockImplementation((url, data) => {
  return Promise.resolve({ url, data });
});

describe('Authentication API', () => {
  it('should call login with the correct endpoint and data', async () => {
    const loginData = { username: 'user', password: 'pass' };
    const response = await Login(loginData);

    expect(HttpServices.post).toHaveBeenCalledWith('auth/login', loginData);
    expect(response).toEqual({ url: 'auth/login', data: loginData });
  });

  it('should call register with the correct endpoint and data', async () => {
    const registerData = { username: 'newuser', email: 'newuser@example.com', password: 'newpass' };
    const response = await Register(registerData);

    expect(HttpServices.post).toHaveBeenCalledWith('auth/register', registerData);
    expect(response).toEqual({ url: 'auth/register', data: registerData });
  });
});
