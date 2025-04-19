import {
  Code2,
  FileJson,
  FileType,
  Database,
  GitBranch,
  Box,
  Workflow,
  TestTube,
  Smartphone,
  Gauge,
  Server,
  Globe,
  Cpu,
} from "lucide-react"

type TechIconProps = {
  name: string
  className?: string
}

export function TechIcon({ name, className = "h-4 w-4" }: TechIconProps) {
  const techName = name.toLowerCase()

  // Frontend technologies
  if (techName.includes("html") || techName.includes("css")) {
    return <FileType className={`${className} text-orange-500`} />
  }
  if (techName.includes("javascript")) {
    return <FileJson className={`${className} text-yellow-400`} />
  }
  if (techName.includes("typescript")) {
    return <FileJson className={`${className} text-blue-500`} />
  }
  if (techName.includes("react")) {
    return <Code2 className={`${className} text-cyan-400`} />
  }
  if (techName.includes("next")) {
    return <Code2 className={`${className} text-black dark:text-white`} />
  }
  if (techName.includes("tailwind")) {
    return <Code2 className={`${className} text-cyan-500`} />
  }

  // Backend technologies
  if (techName.includes("node")) {
    return <Server className={`${className} text-green-600`} />
  }
  if (techName.includes("express")) {
    return <Server className={`${className} text-gray-500`} />
  }
  if (techName.includes("mongo")) {
    return <Database className={`${className} text-green-500`} />
  }
  if (techName.includes("postgres") || techName.includes("sql")) {
    return <Database className={`${className} text-blue-600`} />
  }
  if (techName.includes("graphql")) {
    return <Globe className={`${className} text-pink-600`} />
  }
  if (techName.includes("rest") || techName.includes("api")) {
    return <Globe className={`${className} text-blue-500`} />
  }

  // Tools & Others
  if (techName.includes("git")) {
    return <GitBranch className={`${className} text-orange-600`} />
  }
  if (techName.includes("docker")) {
    return <Box className={`${className} text-blue-500`} />
  }
  if (techName.includes("ci") || techName.includes("cd")) {
    return <Workflow className={`${className} text-gray-600`} />
  }
  if (techName.includes("test")) {
    return <TestTube className={`${className} text-green-500`} />
  }
  if (techName.includes("responsive") || techName.includes("design")) {
    return <Smartphone className={`${className} text-purple-500`} />
  }
  if (techName.includes("performance") || techName.includes("optimization")) {
    return <Gauge className={`${className} text-red-500`} />
  }

  // Default icon
  return <Cpu className={`${className} text-gray-500`} />
}
