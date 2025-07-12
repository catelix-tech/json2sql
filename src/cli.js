#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { jsonToSql } = require("./convert");

const args = process.argv.slice(2);
const [jsonPath, tableName = "my_table"] = args;

if (!jsonPath) {
  console.error("❌ Usage: node cli.js <path-to-json> [tableName]");
  process.exit(1);
}

const raw = fs.readFileSync(path.resolve(jsonPath));
const data = JSON.parse(raw);

const sql = jsonToSql(data, tableName);
console.log(sql);
