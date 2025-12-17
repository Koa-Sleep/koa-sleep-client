import { UserControllerService, UserResponse } from "@/client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const fetchCurrentUser = async (): Promise<UserResponse> => {
  const res = await UserControllerService.getCurrentUser();
  if (!res.data) {
    throw new Error("No user data received");
  }
  return res.data;
};

export const useFetchCurrentUser = () => {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: () => {
      return fetchCurrentUser();
    },
    retry: 0,
    placeholderData: keepPreviousData,
  });
};
