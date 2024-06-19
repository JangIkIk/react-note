export type FetchMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
export type Options<T> = {method?: FetchMethod, headers?: string | null, data?: T | null}
export type ReturnArray<T> = [(url: string, options?: Options<T>, auth?: string)=>Promise<Response | Error | undefined>, T | null, number]



// 기존
// export type ReturnArray<T> = [(url: string, options?: Options<T>, auth?: string)=>Promise<void | number>, number| null, T| null]