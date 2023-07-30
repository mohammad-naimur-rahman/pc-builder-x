import { ICategory } from '@/types/globalTypes'
import { BsFillCpuFill, BsFillDatabaseFill, BsMotherboard, BsPower } from 'react-icons/bs'
import { CgSmartphoneRam } from 'react-icons/cg'
import { PiMonitor } from 'react-icons/pi'
import { GiComputerFan } from 'react-icons/gi'

export const categories: Array<ICategory> = [
  {
    id: 1,
    label: 'CPU',
    value: 'cpu',
    icon: <BsFillCpuFill />,
  },
  {
    id: 2,
    label: 'Motherboard',
    value: 'motherboard',
    icon: <BsMotherboard />,
  },
  {
    id: 3,
    label: 'RAM',
    value: 'ram',
    icon: <CgSmartphoneRam />,
  },
  {
    id: 4,
    label: 'PSU',
    value: 'psu',
    icon: <BsPower />,
  },
  {
    id: 5,
    label: 'Storage',
    value: 'storage',
    icon: <BsFillDatabaseFill />,
  },
  {
    id: 6,
    label: 'Monitor',
    value: 'monitor',
    icon: <PiMonitor />,
  },
  {
    id: 7,
    label: 'Others',
    value: 'others',
    icon: <GiComputerFan />,
  },
]
