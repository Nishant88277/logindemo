import { QueryFunctionContext, QueryKey } from "react-query";
import { PhotoData } from "../interfaces/interfaces";

export const FetchPhotos = async (params: QueryFunctionContext<QueryKey, any>): Promise<PhotoData[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    return response.json();
}