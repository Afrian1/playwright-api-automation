
import { test, expect } from '@playwright/test';

const apiHeaders = {
  'x-api-key': process.env.REQRES_API_KEY!,
};

test.describe('API GET - Mengambil Data Pengguna', () => {

  test('TC-GET-001: Mengambil detail pengguna dengan ID valid', async ({ request }) => {
    const response = await request.get('/api/users/2', {
      headers: apiHeaders,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    // Validate user data
    expect(body.data.id).toBe(2);
    expect(body.data.email).toBeTruthy();
    expect(body.data.first_name).toBeTruthy();
    expect(body.data.last_name).toBeTruthy();
    expect(body.data.avatar).toBeTruthy();
  });

  test('TC-GET-002: Menangani ID pengguna yang tidak ditemukan', async ({ request }) => {
    const response = await request.get('/api/users/9999', {
      headers: apiHeaders,
    });

    expect(response.status()).toBe(404);

    const body = await response.json();

    // Validate response for a user that does not exist
    expect(body.data).toBeUndefined();
  });

  test('TC-GET-003: Menangani ID pengguna dengan format nonnumerik', async ({ request }) => {
    const response = await request.get('/api/users/abc', {
      headers: apiHeaders,
    });

    const statusCode = response.status();
    const body = await response.json();

    // Validate that the API does not return a successful user response
    expect(statusCode).not.toBe(200);
    expect(body.data).toBeUndefined();

    console.log('Status Code:', statusCode);
    console.log('Response Body:', body);
  });

});