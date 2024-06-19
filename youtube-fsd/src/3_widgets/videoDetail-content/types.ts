export type VideoDetailData = {
    idx: number,
    channelIdx: number,
    title: string,
    content: string,
    thumbnailImg: string,
    createdAt: Date
}

export type VideoDetailInfo = VideoDetailData | null