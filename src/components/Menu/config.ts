import { MenuEntry } from '@olive-dev/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://avax.olive.cash',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://avax.olive.cash/farms',
  },
  {
    label: 'Pools',
    icon: 'CaveIcon',
    href: 'https://avax.olive.cash/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/olive-cash',
        external: true,
      },
      {
        label: 'Docs',
        href: 'https://olive-cash.gitbook.io/olive-cash/',
        external: true,
      },
      {
        label: 'Blog',
        href: 'https://olive-cash.medium.com',
        external: true,
      },
    ],
  },
]

export default config
