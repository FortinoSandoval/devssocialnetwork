import { TEST_DIPATCH } from './types';

// Register user
export const registerUser = (userData) => {
  return {
    type: TEST_DIPATCH,
    payload: userData
  };
};