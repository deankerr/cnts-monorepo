import { query } from './_generated/server'

export const helloWorld = query(async () => 'Hello from Convex!')

export const getVisitorsData = query(async () => [100, 80, 75])
