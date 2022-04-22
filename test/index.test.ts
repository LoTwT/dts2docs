import { parseFileSync } from "@swc/core"
import { resolve } from "path"

const simpleConfigPath = resolve(__dirname, "./source/simple.ts")
const complexConfigPath = resolve(__dirname, "./source/complex.ts")

describe("parse", () => {
  it("first", () => {
    let ret = parseFileSync(simpleConfigPath, { syntax: "typescript" })
    expect(ret).toMatchInlineSnapshot()
  })
})
