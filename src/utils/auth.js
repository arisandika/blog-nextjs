import API_URL from "@/utils/config";

export const verifyToken = async (
  router,
  setAuthorized,
  setLoading,
  setUserId
) => {
  const token = localStorage.getItem("token");

  if (!token) {
    router.replace("/login");
    setIsLoggedIn(false);
    setLoading(false);
    return;
  }

  try {
    const response = await fetch(API_URL + "api/verify-token", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      if (data.data.role_as !== 1) {
        router.replace("/login");
      } else {
        setAuthorized(true);
        setUserId(data.data.id);
        setLoading(false);
      }
    } else {
      router.replace("/login");
    }
  } catch (error) {
    router.replace("/login");
  }
};
