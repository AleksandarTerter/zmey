import { Content } from "../pages/Article";

export interface Topic {
    label: string;
    path: string;
    subTopics: Topic[];
    content?: Content;
}