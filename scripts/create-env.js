const fs = require('fs')
fs.writeFileSync('./.env.production', `API_KEY=${process.env.API_KEY}\nSPREADSHEET_ID=${process.env.SPREADSHEET_ID}`)