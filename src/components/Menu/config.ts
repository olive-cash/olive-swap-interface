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
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'OliveCash Token',
        href: 'https://info.olive.cash/#/token/0x617724974218a18769020a70162165a539c07e8a',
        external: true,
      },
    ],
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
