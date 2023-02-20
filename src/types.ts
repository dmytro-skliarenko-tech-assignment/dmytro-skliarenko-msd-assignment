export type AgeCase = {
    age: string,
    rate: number,
    value: number,
}
export type Case = {
    date: string,
    newCases: AgeCase[],
}
export type CaseAggregated = {
    date: string,
    allCases: number
}
export type CaseNew = {
    date: string,
    newCases: number,
}
export type HomeProps = {
    lineChartNewCases: ChartData,
    doughnutChartVariants: ChartData,
}
export type Dataset = {
    label: string,
    data: number[],
    backgroundColor: string | string[],
}
export type ChartData = {
    labels: string[],
    datasets: Dataset[],
}
export type LineChartProps = {
    data: ChartData,
}
export type Variant = {
    cumWeeklySequenced: number,
    newWeeklyPercentage: number,
    variant: string,
}
export type DoughnutChartProps = {
    data: ChartData,
}