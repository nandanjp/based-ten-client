import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MediaListResponseType } from "@/lib/api.types";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export function useMedia(search?: string) {
  return useQuery({
    queryKey: ["list", search],
    queryFn: async () => {
      if (search && search != "") {
        return (await axiosInstance.get(`api/media?title=${search}`))
          .data as MediaListResponseType;
      }
      return (await axiosInstance.get("api/media"))
        .data as MediaListResponseType;
    },
  });
}
