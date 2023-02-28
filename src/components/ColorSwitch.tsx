import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core'; 
import { MoonStars, Sun } from 'phosphor-react';

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group position="center" my={30}>
      <Switch
        checked={colorScheme === 'dark'}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<Sun color={theme.white} size={20} weight="bold" />}
        offLabel={<MoonStars color={theme.colors.gray[6]} size={20} weight="bold" />}
      />
    </Group>
  );
}