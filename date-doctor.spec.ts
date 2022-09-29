import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { DateDoctor } from "./date-doctor.ts"

Deno.test("format date", async () => {

    const input = new Date(2022, 9, 29, 21, 42, 0, 0)
    const expectedOutput = '2022-10-29 19:42:00'
    const actualOutput = DateDoctor.formatDate(input)

    assertEquals(actualOutput, expectedOutput)


})
