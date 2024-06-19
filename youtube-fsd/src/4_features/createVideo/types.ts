

export interface CreateVideoData{
    title: string;
    content: string;
    file: File;   
}

export type VideoData = CreateVideoData | null

export interface CreateVideoProps extends CreateVideoData{
    [key: string]: string | File;
}


export type PostCreateVideo = (props: CreateVideoProps, onClose?: ()=>void) => void;
export type UsePostCreateVideo = () => [PostCreateVideo, VideoData]