import API_URL from "@/utils/config";

// export const registerUser = async (userData) => {
//   try {
//     const response = await fetch(`${API_URL}/api/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(JSON.stringify(errorData));
//     }

//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// };

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// export const logoutUser = async (token) => {
//   // eslint-disable-next-line no-useless-catch
//   try {
//     const response = await fetch(`${API_URL}/api/logout`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to logout");
//     }

//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// };
