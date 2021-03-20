import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import i18next from "i18next";
import "dayjs/locale/en";
import "dayjs/locale/es";

dayjs.extend(relativeTime);

export function TimeAgo(date: Date): string {
    dayjs.locale(i18next.language);
    return dayjs().to(dayjs(date));
}
