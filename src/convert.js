function jsonToSql(jsonArray, tableName = "my_table") {
  if (!Array.isArray(jsonArray) || jsonArray.length === 0) return "";

  const keys = Object.keys(jsonArray[0]);
  return jsonArray.map(row => {
    const values = keys.map(key => {
      const value = row[key];
      if (typeof value === "string") return `'${value.replace(/'/g, "''")}'`;
      if (value === null || value === undefined) return 'NULL';
      return value;
    });

    return `INSERT INTO ${tableName} (${keys.join(", ")}) VALUES (${values.join(", ")});`;
  }).join("\n");
}

module.exports = { jsonToSql };