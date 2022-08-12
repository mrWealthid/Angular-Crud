export interface IBlog {
    title: string;
    content: string;
    id: number;
    timeStamp?: number | string;
}

export interface TrackerError {
    errorNumber: number;
    message: string;
    friendlyMessage: string;
}