import React from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Navbar, Switch, useTheme } from '@nextui-org/react'

export interface ModeButtonInterface {}


const ModeButton : React.FC<ModeButtonInterface> = () => {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
	return (
    <>
      <Navbar.Brand color="inherit">
        {type === 'dark' ? '🌙' : '🌞'}
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
