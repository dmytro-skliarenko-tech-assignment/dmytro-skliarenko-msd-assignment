import { getRandomGreenColor } from "@/helpers";
import { CaseNew, ChartData, Variant } from "@/types";

export function transformMaleFemaleCaseDataForLineChart(caseData1: CaseNew[], caseData2: CaseNew[]): ChartData {
    return ({
        labels: caseData1.map(el => el.date),
        datasets: [
            {
                label: 'Male',
                data: caseData1.map(el => el.newCases),
                backgroundColor: getRandomGreenColor(),
            },
            {
                label: 'Female',
                data: caseData2.map(el => el.newCases),
                backgroundColor: getRandomGreenColor(),
            },
        ],
    })
}

export function transformVariantsDataForDoughnutChart(variantsData: Variant[]): ChartData {
    return ({
        labels: variantsData.map(el => el.variant),
        datasets: [
            {
                label: 'Weekly %',
                data: variantsData.map(el => el.newWeeklyPercentage),
                backgroundColor: variantsData.map(() => getRandomGreenColor()),
            },
        ],
    })
}




