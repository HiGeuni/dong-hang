import {instance} from "@/api/index.ts";
export const postMessage = async (message: string) => {
  const {data} = await instance.post('/chat', {message});
  return data;
}
