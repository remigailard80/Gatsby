import { createStitches } from '@stitches/react';
import { em, rem } from 'polished'
import type * as Stitches from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    media: {
        sm: `(min-width: ${em(576)})`,
        md: `(min-width: ${em(768)})`,
        lg: `(min-width: ${em(992)})`,
        xl: `(min-width: ${em(1200)})`,
        xxl: `(min-width: ${em(1400)})`,
    },
    theme: {
        colors: {
            gray1: 'rgba(128,128,128,1)',
            gray2: 'rgba(128,128,128,0.7)',
            gray3: 'rgba(128,128,128,0.4)',
            normal: 'black'
        },
        backgroundColors: {
            gray1: 'rgba(128,128,128,1)',
            gray2: 'rgba(128,128,128,0.7)',
            gray3: 'rgba(128,128,128,0.4)',
            normal: 'black'
        },
        fontSizes: {
          heading1: rem(72),
          heading2: rem(60),
          heading3: rem(54),
          heading4: rem(42),
          subtitle1: rem(32),
          subtitle2: rem(26),
          subtitle3: rem(20),
          subtitle4: rem(18),
          body1: rem(18),
          body2: rem(16),
          body3: rem(15),
          caption1: rem(14),
          caption2: rem(13),
          caption3: rem(12),
        },
        lineHeights: {
          heading1: rem(90),
          heading2: rem(80),
          heading3: rem(73),
          heading4: rem(57),
          subtitle1: rem(48),
          subtitle2: rem(39),
          subtitle3: rem(31),
          subtitle4: rem(28),
          body1: rem(30),
          body2: rem(28),
          body3: rem(26),
          caption1: rem(24),
          caption2: rem(22),
          caption3: 'auto',
        },
        sizes: {
          maxContent: rem(1200),
        },
    },
    utils: {
        typography: (value: Stitches.PropertyValue<'fontSize'>) => ({
            fontSize: value
        }),
        bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
            backgroundColor: value
        })
    }
}) 