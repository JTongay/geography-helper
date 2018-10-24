import { Alignment, Button, Navbar } from '@blueprintjs/core';
import * as React from 'react';

export const Nav: React.StatelessComponent<{}> = () => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="globe" text="Globe" />
      </Navbar.Group>
    </Navbar>
  );
}
