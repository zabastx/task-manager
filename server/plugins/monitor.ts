import os from 'os'
import fs from 'fs'
import path from 'path'

export default defineNitroPlugin(() => {
	const logPath = path.resolve(process.cwd(), 'logs', 'resource-monitor.log')

	fs.mkdirSync(path.dirname(logPath), { recursive: true })
	
	setInterval(logToFile, 300000)
	
	logToFile()
	
	function logToFile() {
		const entry = getLogEntry()
		fs.appendFileSync(logPath, entry)
	}

	function getLogEntry(): string {
		const timestamp = new Date().toISOString()
		const totalMem = os.totalmem()
		const freeMem = os.freemem()
		const usedMem = totalMem - freeMem
		const cpus = os.cpus()

		const memInfo = `🧠 Memory | Used: ${formatBytes(usedMem)} / Total: ${formatBytes(totalMem)}`

		const cpuInfo = cpus
			.map((cpu, i) => {
				const times = cpu.times
				const total = Object.values(times).reduce((a, b) => a + b, 0)
				const usage = ((total - times.idle) / total) * 100
				return `Core ${i + 1}: ${usage.toFixed(2)}%`
			})
			.join(' | ')

		return `[${timestamp}]\n${memInfo}\n⚙️ CPU | ${cpuInfo}\n---------------------------\n`
	}

	function formatBytes(bytes: number): string {
		const units = ['B', 'KB', 'MB', 'GB', 'TB']
		let i = 0
		while (bytes >= 1024 && i < units.length - 1) {
			bytes /= 1024
			++i
		}
		return `${bytes.toFixed(2)} ${units[i]}`
	}
})
