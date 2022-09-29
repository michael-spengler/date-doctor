import { DateDoctor } from "./date-doctor.ts"

const input = new Date(2022, 9, 29, 21, 42, 0, 0)
const myUTCDate = DateDoctor.formatDate(input)

console.log(myUTCDate)




