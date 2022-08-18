import solid from "@astrojs/solid-js";
import { defineConfig } from "astro/config";
import { astroImageTools }  from "astro-imagetools";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import transformerDirective from '@unocss/transformer-directives'
import presetWebFonts from "@unocss/preset-web-fonts";
import uno from "astro-uno";
import { presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import { presetScrollbar } from "unocss-preset-scrollbar";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    integrations: [
      astroImageTools,
      solid(),
      partytown({}),
      sitemap(),
      uno({
        presets: [
          presetUno(),
          presetWebFonts({
            provider: "google",
            fonts: {
              sans: "PT Sans",
              mono: ["Fira Code", "Fira Mono:400"],
            },
          }),
          presetIcons(),
          presetScrollbar({}),
        ],
        transformers: [
          transformerDirective(),
          transformerVariantGroup()
        ],
      }),
    ],
  },
);
