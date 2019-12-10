const env = process.env

const nodeEnv = 'development'

const serverURL = {
  port: process.env.PORT || 7000,
  host: process.env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`
  }
}

module.exports = serverURL
