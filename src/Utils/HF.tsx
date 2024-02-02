export function getDateDistanceInMonthsAndYears(startDate: any, endDate: any) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    var yearDiff: any = end.getFullYear() - start.getFullYear();
    var monthDiff: any = end.getMonth() - start.getMonth();

    if (monthDiff < 0) {
        yearDiff--
        monthDiff += 12;
    }

    return { years: yearDiff, months: monthDiff };
}