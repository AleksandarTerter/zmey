import { Topic } from "../../abstractions/Topic";
import { variablesAndConstants } from "./variables";

export const javaScript: Topic =
{
    label: 'JavaScript',
    path: 'javaScript',
    subTopics: [
        {
            label: 'Какво е JavaScript',
            path: 'intro',
            subTopics: [{
                label: 'sub',
                path: 'sub1',
                subTopics: [],
                content: variablesAndConstants
            }, {
                label: 'sub2',
                path: 'sub2',
                subTopics: [],
                content: variablesAndConstants
            }],
        },
        {
            label: 'sub',
            path: 'sub3',
            subTopics: [],
            content: variablesAndConstants
        }
    ]
};