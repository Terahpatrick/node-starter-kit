#!/usr/bin/env node

const { execSync } = require('child_process')

const runCommand = command => {
  try {
    execSync(`${command} , { stdio: 'inherit' }`)
  } catch (e) {
    console.error(`Failed to run command: ${command}`)
    return false
  }
  return true
}

const repoName = process.argv[2]

const gitCheckoutCommand = `git clone --depth 1 https://github.com/Terahpatrick/node-starter-kit ${repoName}`

const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository with name ${repoName}...`)
const checkout = runCommand(gitCheckoutCommand)
if (!checkout) process.exit(-1)

console.log(`Installing dependencies...`)
const installDeps = runCommand(installDepsCommand)
if (!installDeps) process.exit(-1)

console.log('Congratulations! Your project is ready to go!')
