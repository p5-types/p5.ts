import { joinSafe } from "upath";

export let datajsonfolder = joinSafe(__dirname, "../datajson/");
export let datajson = joinSafe(__dirname, "../datajson/data.json");
export let outdir = joinSafe(__dirname, "../types/p5");
