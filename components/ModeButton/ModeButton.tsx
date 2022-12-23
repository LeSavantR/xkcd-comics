import React, { useEffect, useState } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Navbar, Switch, useTheme } from '@nextui-org/react'
export interface ModeButtonInterface {}

const ModeButton : React.FC<ModeButtonInterface> = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  const [ icon, setIcon ] = useState('')

  useEffect(() => {
    setIcon(type === 'dark' ? '🌙' : '🌞')
  }, [type])

	return (
    <>
      <Navbar.Brand color="inherit">
        {icon}
      </Navbar.Brand>
      <Navbar.Item>
        <Switch
          checked={isDark}
          onChange={({ target }) => setTheme(target.checked ? 'dark' : 'light')}
        />
      </Navbar.Item>
    </>
	)
}

export default ModeButton
