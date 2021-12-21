module.exports = {
    get(new_args) {
        const months_array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const getMonth = (mon) => new Date(Date.parse(mon + "-1-01")).getMonth() + 1;
        const getTimeString = (date, timezone) => `${timezone}: ${months_array[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCHours().toLocaleString('en-US', { minimumIntegerDigits: 2 })}:${date.getUTCMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })}`

        const date_tokens = new_args.date.split(' ');
        const time_tokens = new_args.time.split(' ');
        const time_tokens_2 = time_tokens[0].split(':');

        const date_condition =
            date_tokens[1].substr(date_tokens[1].length - 2) === 'th' ||
            date_tokens[1].substr(date_tokens[1].length - 2) === 'rd' ||
            date_tokens[1].substr(date_tokens[1].length - 2) === 'nd' ||
            date_tokens[1].substr(date_tokens[1].length - 2) === 'st'

        const year = new Date().getFullYear();
        const month = getMonth(date_tokens[0]) - 1;
        const date = date_condition ? parseInt(date_tokens[1].substr(0, date_tokens[1].length - 2)) : date_tokens[1];
        const hours = parseInt(time_tokens_2[0])
        const mins = parseInt(time_tokens_2[1]);

        const utc_date = Date.UTC(year, month, date, hours, mins);
        const UTC = new Date(utc_date);
        const EDT = new Date(utc_date - 5 * 3600000);
        const PDT = new Date(utc_date - 7 * 3600000);
        const BST = new Date(utc_date + 1 * 3600000);
        const CEST = new Date(utc_date + 2 * 3600000);
        const ACST = new Date(utc_date + 9.5 * 3600000);

        const time_in_UTC = getTimeString(UTC, "UTC");
        const time_in_EDT = getTimeString(EDT, "EDT");
        const time_in_PDT = getTimeString(PDT, "PDT");
        const time_in_BST = getTimeString(BST, "BST");
        const time_in_CEST = getTimeString(CEST, "CEST");
        const time_in_ACST = getTimeString(ACST, "ACST");

        return {
            time_in_UTC,
            time_in_EDT,
            time_in_PDT,
            time_in_BST,
            time_in_CEST,
            time_in_ACST
        }
    }
}
