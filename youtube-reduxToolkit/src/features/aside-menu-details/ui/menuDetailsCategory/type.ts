interface ContentData {
    name: string;
    src: string;
    router: string;
}

export interface CartegoryProps {
  (props: { 
    data: 
    {
        title: string | null; 
        content: ContentData[];
    }}): JSX.Element;
}