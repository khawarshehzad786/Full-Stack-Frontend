import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useEcommerceQuery = () => {
  return useQuery({
    queryKey: ["ecommerce"],
    queryFn: async () => {
      const response = await api.get(`/api/ecommerce`, {
      });
      return response.data;
    },
  });
};
