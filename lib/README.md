# Create React18 Turborepo <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/react18-tools/create-r18-turborepo/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/create-r18-turborepo/actions/workflows/test.yml)
[![Maintainability](https://qlty.sh/gh/react18-tools/projects/create-r18-turborepo/maintainability.svg)](https://qlty.sh/gh/react18-tools/projects/create-r18-turborepo)
[![codecov](https://codecov.io/gh/react18-tools/create-r18-turborepo/graph/badge.svg)](https://codecov.io/gh/react18-tools/create-r18-turborepo)
[![Version](https://img.shields.io/npm/v/create-r18-turborepo.svg?colorB=green)](https://www.npmjs.com/package/create-r18-turborepo)
[![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/create-r18-turborepo.svg)](https://www.npmjs.com/package/create-r18-turborepo)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/create-r18-turborepo)

🚀 **Bootstrap your next Turborepo project in seconds** — powered by [react18-tools/turborepo-template](https://github.com/react18-tools/turborepo-template).
This CLI wraps `create-turbo` and automatically runs `pnpm rebrand` to set up your project for immediate development.

---

## ✨ Features

- 📦 One-liner project creation (`pnpm create r18 my-app`)
- 👨‍💻 Interactive mode — prompts for project name if not provided
- 🎨 Auto-runs `pnpm rebrand` to customize boilerplate naming
- ⚡ Works with **pnpm** by default
- 🔗 Built on top of official `create-turbo` flow

---

## 📦 Installation

Run with `pnpx` or `pnpm create` — no need to install globally.

### Canonical package (recommended)

```bash
pnpx create-r18-turborepo-template my-app
```

### Short aliases (same package, same version)

```bash
pnpm create r18 my-app
pnpx create-r18 my-app
pnpx create-r18-turbo my-app
pnpx turborepo-template-init my-app
```

👉 For docs and issues, always refer to **`create-r18-turborepo-template`**.

---

## 🚀 Usage

### Create a project with a name

```bash
pnpm create r18 my-app
```

### Interactive (prompts for name)

```bash
pnpm create r18
```

👉 If you press Enter without typing, it defaults to:

```
react18-tools-turborepo-template
```

---

## 🔧 What it does

1. Runs `create-turbo` with the **react18-tools/turborepo-template** example.
2. Uses **pnpm** as the package manager.
3. Creates the project folder with your chosen name.
4. Runs `pnpm rebrand` inside the project to customize boilerplate.

---

## 🛠 Example

```bash
pnpm create r18 turbo-demo
```

Output:

```
🔨 Creating turborepo project: turbo-demo
...
🚀 Rebranding project in turbo-demo
✅ Done! Your project is ready in: /path/to/turbo-demo
```

---

## 📚 Related

- [Turborepo Docs](https://turbo.build/repo/docs)
- [react18-tools/turborepo-template](https://github.com/react18-tools/turborepo-template)

---

## 🤝 Contributing

PRs and feedback are welcome!
If you use this tool at your company, please consider [starring the template repo](https://github.com/react18-tools/turborepo-template) ⭐

---

## License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please enroll in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsor](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
