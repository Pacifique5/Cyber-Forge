import { Challenge } from '@/types/challenge';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const challengeService = {
  async getAllChallenges(): Promise<Challenge[]> {
    const response = await fetch(`${API_BASE_URL}/api/challenges`);
    if (!response.ok) {
      throw new Error('Failed to fetch challenges');
    }
    return response.json();
  },

  async getChallengeById(id: string): Promise<Challenge> {
    const response = await fetch(`${API_BASE_URL}/api/challenges/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch challenge');
    }
    return response.json();
  },

  async createChallenge(challenge: Omit<Challenge, 'id' | 'createdAt'>): Promise<Challenge> {
    const response = await fetch(`${API_BASE_URL}/api/challenges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(challenge),
    });
    if (!response.ok) {
      throw new Error('Failed to create challenge');
    }
    return response.json();
  },

  async updateChallenge(id: string, challenge: Partial<Challenge>): Promise<Challenge> {
    const response = await fetch(`${API_BASE_URL}/api/challenges/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(challenge),
    });
    if (!response.ok) {
      throw new Error('Failed to update challenge');
    }
    return response.json();
  },

  async deleteChallenge(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/api/challenges/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete challenge');
    }
  },
};