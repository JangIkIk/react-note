export type ButtonsState = {
    id: number;
    name: string;
    category: string;
}

export type ButtonsFunciton = () => [string, React.Dispatch<React.SetStateAction<string>>, ButtonsState[]]