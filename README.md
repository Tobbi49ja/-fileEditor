File Editor CLI App
discription:A simple Node.js Command-Line Interface (CLI) app that lets you read, write, and delete text files using terminal commands.
It uses only built-in Node.js modules — no external libraries required.

How to Use
to read a file:
```bash node app,js read <filename>```
to write to a file:
```bash node app.js write <filename> <content>```
to delete a file:
```bash node app.js delete <filename>```

⚠️ Notes
If the file doesn’t exist when reading or deleting, an error will be shown.

When writing, if the file doesn’t exist, it will be created automatically.

Only one line of content is supported for writing (for now).

Commands Summary


| Command  | Description               | Example                             |
| -------- | ------------------------- | ----------------------------------- |
| `read`   | Reads and displays a file | `node app.js read notes.txt`        |
| `write`  | Writes content to a file  | `node app.js write notes.txt "Hi!"` |
| `delete` | Deletes a file            | `node app.js delete notes.txt`      |

