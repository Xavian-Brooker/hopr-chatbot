import dotenv from 'dotenv'
import dotenvParse from 'dotenv-parse-variables'

let parsed: {
  API_URL: string
  BOT_NAME: string
  TWITTER_API_KEY: string
  TWITTER_API_SECRET: string
  TWITTER_API_ACCESS_TOKEN: string
  TWITTER_API_ACCESS_TOKEN_SECRET: string
} = {
  API_URL: '127.0.0.1:50051',
  BOT_NAME: 'randobot',
  TWITTER_API_KEY: '',
  TWITTER_API_SECRET: '',
  TWITTER_API_ACCESS_TOKEN: '',
  TWITTER_API_ACCESS_TOKEN_SECRET: ''
}

try {
  const result = dotenv.config()
  if (!result.error) {
    for (const k in result.parsed) {
      process.env[k] = result.parsed[k]
    }
  }
} catch {}

parsed = {
  ...parsed,
  ...(dotenvParse(process.env) as typeof parsed),
}

export const API_URL = parsed.API_URL
export const BOT_NAME = parsed.BOT_NAME
export const TWITTER_API_KEY = parsed.TWITTER_API_KEY
export const TWITTER_API_SECRET = parsed.TWITTER_API_SECRET
export const TWITTER_API_ACCESS_TOKEN = parsed.TWITTER_API_ACCESS_TOKEN
export const TWITTER_API_ACCESS_TOKEN_SECRET = parsed.TWITTER_API_ACCESS_TOKEN_SECRET
