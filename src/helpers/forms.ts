

const LengthOfValue = (type: string , title: string , value: number) =>
  type === "max"
    ?  `${title} should be less ${value} characters!`
    :  `${title} should at least ${value} characters!`


export const FormsInstruments = {
  LengthOfValue
}