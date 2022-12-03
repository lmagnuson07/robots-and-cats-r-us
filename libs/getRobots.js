import path from 'path'
import { promises as fs } from 'fs'

export async function getRobots() {
    const filePath = path.join(process.cwd(), '/mock/robots.json');
    return JSON.parse(await fs.readFile(filePath, 'utf-8'));
}