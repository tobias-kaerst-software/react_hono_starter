import { Button } from '$/components/ui/button';
import { Stack } from '$/components/ui/stack';
import { Typography } from '$/components/ui/typography';

export const App = () => {
  return (
    <Stack className='container mt-24 max-w-[750px] gap-10'>
      <div>
        <Typography variant='h1'>The Joke Tax Chronicles</Typography>
        <Typography variant='p'>
          Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
          day, his advisors came to him with a problem: the kingdom was running out of money.
        </Typography>
        <Typography variant='h2'>The King&apos;s Plan</Typography>
        <Typography variant='p'>
          Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
          day, his advisors came to him with a problem: the kingdom was running out of money.
        </Typography>
      </div>
      <Button className='w-full'>Click me</Button>
    </Stack>
  );
};
