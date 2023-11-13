import { FC } from 'react'
import styles from './AvatarOption.module.scss'
import { SvgIconComponent } from '../../types'

interface IAvatarOption {
  Svg: SvgIconComponent
  text: string
  onClick: () => void
}

const AvatarOption: FC<IAvatarOption> = ({Svg, text, onClick}) => {
  return (
    <label onClick={onClick} className={styles.changePhoto}>
      <div className={styles.icon}>
        <Svg color='#000'/>
      </div>
      <span>{text}</span>
    </label>
  )
}

export { AvatarOption }