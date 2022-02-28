// Obsidian has node's fs, so we can require it here if we need it.
const fs = require('fs').promises

const VAULT_PATH = app.vault.adapter.basePath

// Only use static within this class, that way it doesn't need to be instanced
module.exports = class Utils {
  static partialsPath  = "_meta/templater/partials/"
  static scriptsPath   = "_meta/templater/scripts/"
  static templatesPath = "_meta/templater/templates/"
  static vaultPath = VAULT_PATH + '/'

  static random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  static async read(filename) {
    const basePath = Utils.vaultPath
    const data = await fs.readFile(basePath + filename, 'utf-8')
    return data
  }

  static async write(filename, string) {
    const basePath = Utils.vaultPath
    return await fs.writeFile(basePath + filename, string)
  }

  static async mkdir(directory) {
    await fs.mkdir(`${Utils.vaultPath}${directory}`, { recursive: true })
  }

  static async readdir(directory) {
    return await fs.readdir(`${Utils.vaultPath}${directory}`, {withFileTypes: true})
  }

  static async touch(fullPath) {
    return await Utils.write(fullPath, '')
  }
}