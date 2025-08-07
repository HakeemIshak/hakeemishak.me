# hakeemishak.me

minimal. fast. no fluff.

```sh
# to run
python3 -m http.server 8000
# or just open index.html
```

## stack
- html (obviously)
- [htmx](https://htmx.org) for the interactive bits
- css that doesn't make your eyes bleed
- zero build steps. zero frameworks. zero regrets.

## structure
```
/
├── index.html          # main page
├── z.js               # htmx (because why not z?)
├── z.css              # styles
├── z.jpg              # favicon
└── z/                 # tab fragments
    ├── about
    ├── blog
    ├── demo
    └── supriseme
```

went from remix to this. turns out you don't need 500mb of node_modules to serve some text.

---

*"the best code is the code you don't write"*