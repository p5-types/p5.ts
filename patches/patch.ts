import fs from 'fs';

const replace = (path: string, src: string, dest: string) => {
    try {
        const data = fs
            .readFileSync(path, { encoding: 'utf-8' })
            .replace(src, dest);
        fs.writeFileSync(path, data);
    } catch (err) {
        console.error(err);
    }
}

replace(
    'types/p5/index.d.ts',
    "constructor(sketch: (...args: any[]) => any, node?: HTMLElement);",
    `    constructor(sketch?: (p: object) => void, node?: string | HTMLElement);

__proto__: typeof p5.prototype

static VERSION: string
static instance: p5

static disableFriendlyErrors: boolean

canvas: HTMLCanvasElement

_renderer: p5.Renderer
_curElement: p5.Renderer

registerMethod(
    register: 'init' | 'pre' | 'post' | 'remove',
    callback: () => void
): void

registerPreloadMethod(name: PropertyKey, proto: object): void`)

replace(
    "types/p5/src/core/structure.d.ts",
    "p5(sketch: object, node: string | object): void;",
    "p5: typeof p5"
)
replace(
    "types/p5/src/core/rendering.d.ts",
    "drawingContext: any;",
    `drawingContext:
        CanvasRenderingContext2D | 
        WebGLRenderingContext | 
        WebGL2RenderingContext;`
)

replace(
    "types/p5/src/core/environment.d.ts",
    "windowResized(event?: object): void;",
    "windowResized(event?: UIEvent): false | void;"
)

replace(
    "types/p5/src/events/keyboard.d.ts",
    "keyPressed(event?: object): void;",
    "keyPressed(event?: KeyboardEvent): false | void;"
)
replace(
    "types/p5/src/events/keyboard.d.ts",
    "keyReleased(event?: object): void;",
    "keyReleased(event?: KeyboardEvent): false | void;"
)
replace(
    "types/p5/src/events/keyboard.d.ts",
    "keyTyped(event?: object): void;",
    "keyTyped(event?: KeyboardEvent): false | void;"
)
for (const [src, dest] of [
    ['mouseMoved(event?: object): void;', `mouseMoved(event?: MouseEvent): false | void;`],
    [`mouseDragged(event?: object): void;`, `mouseDragged(event?: DragEvent): false | void;`],
    [`mousePressed(event?: object): void;`, `mousePressed(event?: MouseEvent): false | void;`],
    [`mouseReleased(event?: object): void;`, `mouseReleased(event?: MouseEvent): false | void;`],
    [`mouseClicked(event?: object): void;`, `mouseClicked(event?: MouseEvent): false | void;`],
    [`doubleClicked(event?: object): void;`, `doubleClicked(event?: MouseEvent): false | void;`],
    [`mouseWheel(event?: object): void;`, `mouseWheel(event?: WheelEvent): false | void;`]
]) {
    replace(
        "types/p5/src/events/mouse.d.ts",
        src, dest
    )
}

for (const [src, dest] of [
    [`touchStarted(event?: object): void;`, `touchStarted(event?: TouchEvent): false | void;`],
    [`touchMoved(event?: object): void;`, `touchMoved(event?: TouchEvent): false | void;`],
    [`touchEnded(event?: object): void;`, `touchEnded(event?: TouchEvent): false | void;`],
    [`touches: object[];`, `touches: {
        x: number,
        y: number,
        winX: number,
        winY: number,
        id: number
    }[];`],
]) {
    replace("types/p5/src/events/touch.d.ts", src, dest)
}

// https://github.com/p5-types/p5.ts/issues/96

replace(
    "types/p5/lib/addons/p5.sound.d.ts",
    "declare module '../../index' {",
    "declare namespace p5sound {"
)

try {
    const data = fs
        .readFileSync("types/p5/lib/addons/p5.sound.d.ts", { encoding: 'utf-8' }) + `

export = p5sound
`;
    fs.writeFileSync("types/p5/lib/addons/p5.sound.d.ts", data);
} catch (err) {
    console.error(err);
}
