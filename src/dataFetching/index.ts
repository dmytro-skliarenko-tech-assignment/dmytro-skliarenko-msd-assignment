import { AgeCase, Case, CaseAggregated } from "@/types"

const API_URL = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england'

const reduceAllCases = (ageCases: AgeCase[]) => {
  const allCasesByDate = ageCases
   .map((ageEl) => ageEl.value).reduce((acc, el) => acc + el, 0)
  
  return allCasesByDate
}

async function fetchCases(casesName: string) {
  const res = await fetch(`${API_URL}&structure={"date":"date","newCases":"${casesName}"}`)
  const data = await res.json()

  const allCasesByDate =  data
    .data
    .slice(0, 6)
    .reverse()
    .reduce((acc: CaseAggregated[], el: Case) => ([
      ...acc,
    {date: el.date, allCases: reduceAllCases(el.newCases)}
    ]), [])

  const newCasesByDate = []

  for(let i = 1; i < allCasesByDate.length; i++) {
    newCasesByDate.push({ ...allCasesByDate[i], newCases: allCasesByDate[i].allCases - allCasesByDate[i - 1].allCases })
  }

  return newCasesByDate
}

export async function fetchVariants() {
    const res = await fetch(`${API_URL}&structure={"date":"date","variants":"variants"}`)
    const data = await res.json()

    return data.data.slice(0)[0].variants
}

export const fetchFemaleCases = async () => await fetchCases('femaleCases')
export const fetchMaleCases = async () => await fetchCases('maleCases')