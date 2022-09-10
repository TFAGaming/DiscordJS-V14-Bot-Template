> Need a powerful, low-cost VPS for hosting your applications & bots 24/7? Check out our partner, [Contabo](https://www.tkqlhce.com/click-8950879-15301134)! 🎉

## Quick.db


**Documentation:** [quickdb.js.org](https://quickdb.js.org) [[Migration Guide](https://quickdb.js.org/overview/migration-guide)] <br>
**Support:** [discord.gg/plexidev](https://discord.gg/plexidev) <br>
**NPM:** [npmjs.com/quick.db](https://www.npmjs.com/package/quick.db)

Quick.db is an open-source package meant to provide an easy way for beginners and people of all levels to access & store data in a low to medium volume environment. All data is stored persistently via either [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3) or [promise-mysql](https://www.npmjs.com/package/promise-mysql) and comes way various other quality-of-life features.

-   **Persistent Storage** - Data doesn't disappear through restarts
-   **Multiple Drivers** - You can use either better-sqlite3 or promise-mysql
-   **Works out of the box** - No need to set up a database server, all the data is stored locally in the same project
-   **Beginner Friendly** - Originally created for use in tutorials, the documentation is straightforward and jargon-free
-   & more...

## Installation

<details>
<summary>Mac Prerequisites</summary>
<br>

```bash
1. Install XCode
2. Run `npm i -g node-gyp` in terminal
3. Run `node-gyp --python /path/to/python` in terminal
```

</details>

```python
npm i quick.db better-sqlite3   # (Default) Local SQLite3 File
npm i quick.db promise-mysql    # (Alternative) MySQL Server Connection
```

> If you're having troubles installing, please follow [this troubleshooting guide](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).
> Windows users may need to do additional steps listed [here](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).

## Example

```js
const { QuickDB } = require("quick.db");
const db = new QuickDB(); // will make a json.sqlite in the root folder
// if you want to specify a path you can do so like this
// const db = new QuickDB({ filePath: "source/to/path/test.sqlite" });

(async () => {
    // self calling async function just to get async
    // Setting an object in the database:
    await db.set("userInfo", { difficulty: "Easy" });
    // -> { difficulty: 'Easy' }

    // Getting an object from the database:
    await db.get("userInfo");
    // -> { difficulty: 'Easy' }

    // Getting an object property from the database:
    await db.set("userInfo.difficulty");
    // -> 'Easy'

    // Setting an object in the database:
    await db.set("userInfo", { difficulty: "Easy" });
    // -> { difficulty: 'Easy' }

    // Pushing an element to an array (that doesn't exist yet) in an object:
    await db.push("userInfo.items", "Sword");
    // -> { difficulty: 'Easy', items: ['Sword'] }

    // Adding to a number (that doesn't exist yet) in an object:
    await db.add("userInfo.balance", 500);
    // -> { difficulty: 'Easy', items: ['Sword'], balance: 500 }

    // Repeating previous examples:
    await db.push("userInfo.items", "Watch");
    // -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 500 }
    await db.add("userInfo.balance", 500);
    // -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 1000 }

    // Fetching individual properties
    await db.get("userInfo.balance"); // -> 1000
    await db.get("userInfo.items"); // ['Sword', 'Watch']
})();
```

## Example With MySQLDriver

> **NOTE:** In order to use this driver, install `npm i promise-mysql` separately.

```js
const { QuickDB, MySQLDriver } = require("quick.db");
(async () => {
    const mysqlDriver = new MySQLDriver({
        host: "localhost",
        user: "me",
        password: "secret",
        database: "my_db",
    });

    await mysqlDriver.connect(); // connect to the database **this is important**

    const db = new QuickDB({ driver: mysqlDriver });
    // Now you can use quick.db as normal

    await db.set("userInfo", { difficulty: "Easy" });
    // -> { difficulty: 'Easy' }
})();
```

## Changes in 9.0.x

-   Added two new database options: **driver** and **filePath**
    -   By default, the Sqlite driver is used. Although, you can use the MySQL driver by looking at the example above. More drivers are planned for the future, feel free to submit a pull request as well.
-   Added **.deleteAll()** method
-   Added **.pull()** method (see below)
-   Changed all methods to use async/await
    -   This is because some drivers, such as MySQL, need to use await. Using async/await globally adds code consistency throughout drivers.
-   Changed QuickDB into a class
    -   This changes how the database is initialized, read the [migration guide](https://quickdb.js.org/overview/migration-guide) for more information.
-   Renamed the **.subtract()** method to **.sub()** to match the length of **.add()**
-   General bug fixes
    -   A notable one includes storing numbers as strings in the database now working as intended.

**.pull()**

```js
await db.set("myArray", [
    "axe",
    "sword",
    "shield",
    "health_potion",
    "mana_potion",
]);

await db.pull("myArray", "axe"); // Removing a single item
// -> ['sword', 'shield', 'health_potion', 'mana_potion']

await db.pull("myArray", ["sword", "shield"]); // Removing multiple options
// -> ['health_potion', 'mana_potion']

await db.pull("myArray", (i) => i.includes("potion")); // Using a function
// -> []
```
