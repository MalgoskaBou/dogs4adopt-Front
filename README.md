## Uwaga dotycząca automatycznego formatowania kodu

Żeby kod ormatował się automatycznie podczas zapisu, trzeba dodać odpowiednie ustawienia do VSCode.

Tak wygląda mój _settings.json_ :

```json
{
  "javascript.updateImportsOnFileMove.enabled": "always",
  "prettier.eslintIntegration": true,
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": true
}
```
