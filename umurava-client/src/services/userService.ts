const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface UpdateProfileData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

export interface UpdateEmailData {
  newEmail: string;
  password: string;
}

export const userService = {
  async updateProfile(data: UpdateProfileData): Promise<any> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    console.log('🚀 Frontend: Updating user profile:', data);

    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      let error;
      try {
        error = await response.json();
      } catch {
        error = { message: `HTTP ${response.status}: ${response.statusText}` };
      }
      console.error("❌ Frontend: Update profile error:", error);
      throw new Error(error.message || 'Failed to update profile');
    }

    const result = await response.json();
    console.log('✅ Frontend: Profile updated successfully:', result);
    return result;
  },

  async changePassword(data: ChangePasswordData): Promise<any> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    console.log('🚀 Frontend: Changing password');

    const response = await fetch(`${API_BASE_URL}/user/change-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      let error;
      try {
        error = await response.json();
      } catch {
        error = { message: `HTTP ${response.status}: ${response.statusText}` };
      }
      console.error("❌ Frontend: Change password error:", error);
      throw new Error(error.message || 'Failed to change password');
    }

    const result = await response.json();
    console.log('✅ Frontend: Password changed successfully');
    return result;
  },

  async updateEmail(data: UpdateEmailData): Promise<any> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    console.log('🚀 Frontend: Updating email address');

    const response = await fetch(`${API_BASE_URL}/user/update-email`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      let error;
      try {
        error = await response.json();
      } catch {
        error = { message: `HTTP ${response.status}: ${response.statusText}` };
      }
      console.error("❌ Frontend: Update email error:", error);
      throw new Error(error.message || 'Failed to update email');
    }

    const result = await response.json();
    console.log('✅ Frontend: Email updated successfully');
    return result;
  },

  async uploadProfileImage(file: File): Promise<any> {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    console.log('🚀 Frontend: Uploading profile image');

    const formData = new FormData();
    formData.append('profileImage', file);

    const response = await fetch(`${API_BASE_URL}/user/upload-profile-image`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      let error;
      try {
        error = await response.json();
      } catch {
        error = { message: `HTTP ${response.status}: ${response.statusText}` };
      }
      console.error("❌ Frontend: Upload profile image error:", error);
      throw new Error(error.message || 'Failed to upload profile image');
    }

    const result = await response.json();
    console.log('✅ Frontend: Profile image uploaded successfully');
    return result;
  }
};