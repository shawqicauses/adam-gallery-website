module.exports = {
  rules: {
    "header-max-length": [2, "always", 72],
    "subject-case": [2, "always", "sentence-case"],
    "subject-empty": [2, "never"],
    "scope-case": [2, "always", "pascal-case"],
    "scope-empty": [2, "always"],
    "type-case": [2, "always", "pascal-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "Fix",
        "Update",
        "New",
        "Breaking",
        "Docs",
        "Build",
        "Upgrade",
        "Chore"
      ]
    ]
  }
}
