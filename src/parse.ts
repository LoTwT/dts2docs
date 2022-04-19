import { parse, parseSync, parseFile, parseFileSync } from "@swc/core"

export async function parseDts(src: string) {
  return parse(src, { syntax: "typescript" })
}

export function parseDtsSync(src: string) {
  return parseSync(src, { syntax: "typescript" })
}

export async function parseDtsFile(filepath: string) {
  return parseFile(filepath, { syntax: "typescript" })
}

export function parseDtsFileSync(filepath: string) {
  return parseFileSync(filepath, { syntax: "typescript" })
}

// todo ts ast type collections
