
import { test, expect } from '@playwright/test';
import {
  validUser,
  userWithSpaces,
  emptyUser,
} from '../../test-data/users.data';

test.describe('API POST - Create User', () => {

  test('TC-POST-001: Membuat user baru dengan input valid', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: validUser,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    // Validate response data
    expect(body.name).toBe(validUser.name);
    expect(body.job).toBe(validUser.job);

    // Validate generated ID
    expect(body.id).toBeTruthy();
    expect(Number(body.id)).not.toBeNaN();

    // Validate creation timestamp
    expect(body.createdAt).toBeTruthy();
    expect(Date.parse(body.createdAt)).not.toBeNaN();
  });

  test('TC-POST-002: Menangani request dengan JSON body kosong', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: emptyUser,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    // Validate response based on observed ReqRes demo behavior
    expect(body.id).toBeTruthy();
    expect(Number(body.id)).not.toBeNaN();

    expect(body.createdAt).toBeTruthy();
    expect(Date.parse(body.createdAt)).not.toBeNaN();

    expect(body.name).toBeUndefined();
    expect(body.job).toBeUndefined();
  });

  test('TC-POST-003: Membuat user dengan nama dan jabatan yang mengandung spasi', async ({ request }) => {
    const response = await request.post('/api/users', {
      data: userWithSpaces,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    // Validate response data
    expect(body.name).toBe(userWithSpaces.name);
    expect(body.job).toBe(userWithSpaces.job);

    // Validate generated ID
    expect(body.id).toBeTruthy();
    expect(Number(body.id)).not.toBeNaN();

    // Validate creation timestamp
    expect(body.createdAt).toBeTruthy();
    expect(Date.parse(body.createdAt)).not.toBeNaN();
  });

});
