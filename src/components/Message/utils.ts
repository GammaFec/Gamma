import i18next from "i18next";
import moment from "moment";
import "moment/locale/es";

export function TimeAgo(date: Date): string {
    moment.locale(i18next.language);
    return moment(date).fromNow();
}
