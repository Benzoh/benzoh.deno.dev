import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

serve({
  "/": () => new Response("デノ（まね）", {headers: {"content-type": "text/html; charset=utf-8"}}),
  404: () => new Response("ありまへん（まね）", {headers: {"content-type": "text/html; charset=utf-8"}}),
});
