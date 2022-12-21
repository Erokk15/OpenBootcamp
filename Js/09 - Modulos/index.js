import { suma, multiplica } from "./modulos/controller.js";
import chalk from "chalk";

try {
    const sum = suma(1, 2);
    const multi = multiplica(4, 5);
    console.log(chalk.green(`El resultado de la suma es: ${sum}`));
    console.log(chalk.green(`El resultado de la multiplicacion es: ${multi}`));
} catch (e) {
    console.error(`${e}`)
}