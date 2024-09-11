import { Trans } from '@lingui/macro';

import { Button } from '$/components/ui/button';
import { Stack } from '$/components/ui/stack';
import { Typography } from '$/components/ui/typography';

export const Homepage = () => {
  return (
    <Stack className='container max-w-[750px] gap-10 pt-24'>
      <div>
        <Typography variant='h1'>
          <Trans>Einführung in React.js</Trans>
        </Typography>
        <Typography variant='p'>
          <Trans>
            React.js, allgemein bekannt als React, ist eine Open-Source-JavaScript-Bibliothek zur Erstellung von
            Benutzeroberflächen, insbesondere für Single-Page-Anwendungen. Entwickelt von Facebook, ermöglicht React
            Entwicklern, große Webanwendungen zu erstellen, die effizient auf Datenänderungen reagieren und sich
            entsprechend aktualisieren können.
          </Trans>
        </Typography>
        <Typography variant='h2'>
          <Trans>Erste Schritte</Trans>
        </Typography>
        <Typography variant='p'>
          <Trans>
            Um mit React zu beginnen, müssen Node.js und npm (Node Package Manager) auf Ihrem Computer installiert sein.
            Sie können eine neue React-Anwendung mit dem folgenden Befehl erstellen:
          </Trans>
        </Typography>
      </div>

      <Button className='w-full'>Mehr erfahren</Button>
    </Stack>
  );
};
