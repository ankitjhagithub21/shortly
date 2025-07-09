import axios from "axios"

export async function checkUserExists(email: string): Promise<boolean> {
  try {
    const res = await axios.post(`/api/auth/userExists`, { email });
    return res.data?.success === true;
  } catch (err) {
    console.error("checkUserExists error:", err);
    return false;
  }
}

export async function registerUser(data: { name: string; email: string }): Promise<boolean> {
  try {
    const res = await axios.post(`/api/auth/signup`, data);
    return res.data?.success === true;
  } catch (err) {
    console.error("registerUser error:", err);
    return false;
  }
}
