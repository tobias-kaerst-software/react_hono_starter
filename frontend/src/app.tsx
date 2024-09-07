import { Button } from '$/components/ui/button';
import { Typography } from '$/components/ui/typography';

export const App = () => {
  return (
    <div>
      <Typography variant='h1'>The Joke Tax Chronicles</Typography>
      <Typography variant='p'>
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
        day, his advisors came to him with a problem: the kingdom was running out of money.
      </Typography>
      <Typography variant='h1'>The King&apos;s Plan</Typography>
      <Typography affects='removePMargin' variant='p'>
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
        day, his advisors came to him with a problem: the kingdom was running out of money.
      </Typography>
      <Button>Click me</Button>
    </div>
  );
};
