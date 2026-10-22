
import { test, expect } from '@playwright/test';
import {
  validUser,
  emptyUser,
} from '../../test-data/users.data';

test.describe('API PUT - Update User', () => {
  test('TC-PUT-001: Update user dengan data valid', async ({ request }) => {
    const response = await request.put('/api/users/2', {
      data: validUser,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe(validUser.name);
    expect(body.job).toBe(validUser.job);
    expect(body.updatedAt).toBeTruthy();
    expect(Number.isNaN(Date.parse(body.updatedAt))).toBe(false);
  });

  test('TC-PUT-002: Memvalidasi respons update dengan JSON body kosong', async ({ request }) => {
    const response = await request.put('/api/users/2', {
      data: emptyUser,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.updatedAt).toBeTruthy();
    expect(Number.isNaN(Date.parse(body.updatedAt))).toBe(false);
    expect(body.name).toBeUndefined();
    expect(body.job).toBeUndefined();
  });

  test('TC-PUT-003: Memvalidasi respons endpoint demo untuk ID user yang tidak ditemukan', async ({ request }) => {
    const response = await request.put('/api/users/9999', {
      data: validUser,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    // Assertion ini berdasarkan respons demo ReqRes yang diamati.
    expect(body.name).toBe('James');
    expect(body.job).toBe('Influencer');
    expect(body.updatedAt).toBeTruthy();
    expect(Number.isNaN(Date.parse(body.updatedAt))).toBe(false);
  });
});

