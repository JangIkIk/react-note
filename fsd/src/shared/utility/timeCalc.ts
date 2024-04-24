export const dateCalc = (date: string)=>{
    const currentDate = new Date();
    const listCreateDate = new Date(date);

    // 10분까지는 방금전으로 표시
    const seconds = Math.floor((currentDate.getTime() - listCreateDate.getTime()) / 1000);
    if(seconds <= 600) return "방금전";

    // 1시간 미만까지는 분으로 표시
    const minutes = seconds / 60;
    if(minutes < 60) return `${Math.floor(minutes)}분 전`;

    // 24시간 전까지는 시간으로 표시
    const hours = minutes / 60;
    if(hours < 24) return `${Math.floor(hours)}시간 전`;

    // 31일 까지는 일로 표시
    const day = hours / 24;
    if(day <= 31) return `${Math.floor(day)}일 전`;

    // 365일 전까지는 월로 표시
    const months = hours / 31;
    if(months < 12) return `${Math.floor(months)}개월 전`;

    // 365일 이후는 년으로 표시
    const years = months / 365;
    if(years < 365) return `${Math.floor(years)}년 전`;
}