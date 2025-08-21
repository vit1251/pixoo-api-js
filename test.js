
import { PixooAPI, Font } from './index.js';

const sleep = (duration = 1.0) => new Promise((resolve) => setTimeout(resolve, 1000 * duration));

const pixoo = new PixooAPI('192.168.1.100', 64);
await pixoo.initialize();

await pixoo.setBrightness(20);

//await pixoo.playBuzzer();

async function drawScene0() {
    pixoo.clear();

    pixoo.drawTextLeft("ABCDE", 4 + 0 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("FGHIJ", 4 + 1 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("KLMNO", 4 + 2 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("PQRST", 4 + 3 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("UVWXY", 4 + 4 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("Z", 4 + 5 * 6, '#C0C0C0', 8, Font.Pico8);

    pixoo.drawTextRight("abcde", 64 - 6 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("fghij", 64 - 5 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("klmno", 64 - 4 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("pqrst", 64 - 3 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("uvwxy", 64 - 2 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("z    ", 64 - 1 * 6 - 4, '#C0C0C0', 8, Font.Pico8);

    await pixoo.push();
}

async function drawScene1() {
    pixoo.clear();

    pixoo.drawTextLeft("АБВГД", 4 + 0 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("ЕЖЗИЙ", 4 + 1 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("КЛМНО", 4 + 2 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("ПРСТУ", 4 + 3 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("ФХЦЧЩ", 4 + 4 * 6, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextLeft("ЫЬЭЮЯ", 4 + 5 * 6, '#C0C0C0', 8, Font.Pico8);

    pixoo.drawTextRight("абвгд", 64 - 6 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("ежзий", 64 - 5 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("клмно", 64 - 4 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("прсту", 64 - 3 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("фхцчщ", 64 - 2 * 6 - 4, '#C0C0C0', 8, Font.Pico8);
    pixoo.drawTextRight("ыьэюя", 64 - 1 * 6 - 4, '#C0C0C0', 8, Font.Pico8);

    await pixoo.push();
}

/**
 * Разрешение экрана (16 x 10)
 *
 */
async function drawScene2() {
    pixoo.clear();

    pixoo.drawTextLeft(String.raw`1234567890123456`,  0 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`2\ # |\  /| # /|`,  1 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`3 \  | \/ |  / |`,  2 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`4  \ | /\ | /  |`,  3 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`5 # \|/  \|/ # |`,  4 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`6----x----x----|`,  5 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`7 # /|\  /|\ # |`,  6 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`8  / | \/ | \  |`,  7 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`9 /  | /\ |  \ |`,  8 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`0/ # |/  \| # \|`,  9 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(String.raw`1--------------+`, 10 * 6, '#C0C0C0', 0, Font.Pico8);

    await pixoo.push();
}

async function drawScene3() {
    pixoo.clear();

    pixoo.drawTextLeft(`The quick brown|`,  0 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`fox jumps over |`,  1 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`the lazy dog   |`,  2 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  3 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  4 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  5 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  6 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  7 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  8 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  9 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`---------------+`, 10 * 6, '#C0C0C0', 0, Font.Pico8);

    await pixoo.push();
}

async function drawScene4() {
    pixoo.clear();

    pixoo.drawTextLeft(`Съешь ещё этих |`,  0 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`мягких         |`,  1 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`французских    |`,  2 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`булок, да      |`,  3 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`выпей же чаю   |`,  4 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  5 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  6 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  7 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  8 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`               |`,  9 * 6, '#C0C0C0', 0, Font.Pico8);
    pixoo.drawTextLeft(`---------------+`, 10 * 6, '#C0C0C0', 0, Font.Pico8);

    await pixoo.push();
}


while (true) {
    await drawScene0();
    await sleep(10.0);
    await drawScene1();
    await sleep(10.0);
    await drawScene2();
    await sleep(10.0);
    await drawScene3();
    await sleep(10.0);
    await drawScene4();
    await sleep(10.0);
}
